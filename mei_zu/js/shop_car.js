var shop_car = (function () {
    return {
        init: function () {
            this.event();
            this.selectednum();
            this.insertGood();
            this.calcTotal();
        },
        event: function () {
            var _this = this;
            !$(function () {


                //打开页面时判断cookie,获取购物车内商品数量

                let currname = getCookie("username");
                console.log(currname);
                if (currname != null) {
                    // console.log(document.cookie);
                    $(".menu_notlogined").css("display", "none");
                    $(".menu_logined").css("display", "block");
                    $(".menu_logined a:eq(1)").html(currname + "的商城");
                    // $(".good_info").remove();
                    _this.getCartNum(currname); // 获取购物车商品数量
                    _this.getUserCart(currname); //把商品数据渲染到页面
                    //删除购物车商品
                    $("body").on("click", ".add", function (e) {
                        e.preventDefault();
                        let gid = $(this).attr("data-gid");
                        let goodsId = [];
                        goodsId.push(gid);
                        let currname = getCookie("username")
                        $(this).parent().remove();
                        _this.deleteCartGood(goodsId, currname);
                    });
                }


                //给网址后面加一个search
                url('.login_car');
                //退出登录
                $('.exit').click(function () {
                    alert('用户' + getCookie('username') + '已退出！')
                    delCookie("username");
                    location.reload();
                })
                //定位固定底部结算栏
                fixed('.cart-footer', 'fixed', 200);

                $('body').on("click", ".numAdd", function () { //数量加一事件
                    AddBtn(this);
                    _this.calcTotal(this); //计算总价格
                });
                $("body").on("click", ".numSub", function () { //数量减1事件
                    subBtn(this);
                    _this.calcTotal(this);
                });
                $('body').on("keydown", ".num", function (event) { //输入数量的事件
                    let e = event || window.event;
                    if (e.keyCode < 48 || e.keyCode > 57) { //输入非数字便阻止
                        e.preventDefault();
                    }
                });
                //加的按钮
                function AddBtn(obj) {
                    let num = $(obj).siblings(".num").val();
                    let price = $(obj).parent().siblings(".good_price").children("span");
                    let total = $(obj).parent().siblings(".good_sum").children("span");
                    let gid = $(obj).parent().parent().attr("data-gid");
                    let currname = getCookie("username");
                    num++;
                    if (num >= 9) {
                        num = 9
                    }
                    $(obj).siblings(".num").val(num);
                    total.html(parseFloat(price.html() * num));
                    _this.calcTotal();
                    _this.updateGoodNum(gid, num, currname); //更新购物车数量
                };
                //减的按钮
                function subBtn(obj) {
                    let num = parseInt($(obj).siblings(".num").val());
                    let price = $(obj).parent().siblings(".good_price").children("span");
                    let total = $(obj).parent().siblings(".good_sum").children("span");
                    let gid = $(obj).parent().parent().attr("data-gid");
                    let currname = getCookie("username");
                    num--;
                    if (num <= 1) {
                        num = 1
                    }
                    $(obj).siblings(".num").val(num);
                    total.html(parseFloat(price.html() * num));
                    _this.calcTotal();
                    _this.updateGoodNum(gid, num, currname);
                };

                //选择框 //全选效果 
                $(".select_all").click(function (e) {
                    //    e.preventDefault();
                    let isChecked = this.checked;
                    //遍历全选框
                    $.each($(".select_all"), function (indexInArray, valueOfElement) {
                        $(".select_all")[indexInArray].checked = isChecked; //每个(3个)全选框选中
                    });
                    //遍历单选框
                    $.each($(".good_info .checkboxs"), function (indexInArray, valueOfElement) {
                        $(".good_info .checkboxs")[indexInArray].checked = isChecked; //第几个单选框选中

                    });
                    // 获取全选框的标签
                    if ($(".select_all")[0].checked) {
                        singelCheckBoxEvent();
                    }
                    _this.calcTotal();
                });

                $("body").on("click", ".good_info .checkboxs", function () {
                    singelCheckBoxEvent();
                });
                //单选框选中改变总价
                function singelCheckBoxEvent() {
                    let $checkboxs = $(".good_info .checkboxs");
                    let goodsTotal = 0;
                    let hasUncheck = false;
                    $.each($checkboxs, function (indexInArray, valueOfElement) {
                        if (($checkboxs)[indexInArray].checked) {
                            let total = $checkboxs.eq(indexInArray).siblings(".good_sum").children("span").html();
                            goodsTotal += parseFloat(total);
                        } else {
                            hasUncheck = true;
                        }
                    });
                    currentGoodsTotal = $("#totalmoney").html();
                    if (goodsTotal != currentGoodsTotal) { //修改总金额
                        _this.calcTotal();

                    }
                    //判断是否出现为选中的商品，出现则取消全选框
                    if (hasUncheck) {
                        $.each($(".select_all"), function (indexInArray, valueOfElement) {
                            $(".select_all")[indexInArray].checked = false;
                        });
                    } else {
                        $.each($(".select_all"), function (indexInArray, valueOfElement) {
                            $(".select_all")[indexInArray].checked = true;
                        });
                    }

                }

                //删除选中商品
                $("#removeselect").click(function (e) {
                    e.preventDefault();
                    let $checkboxs = $(".good_info .checkboxs");
                    let goodsId = [];
                    alert("\n已删除选中商品");
                    $.each($checkboxs, function (indexInArray, valueOfElement) {
                        let isCheck = $checkboxs[indexInArray];
                        if (isCheck.checked) {
                            goodsId.push($(isCheck).parent().attr("data-gid"));
                            $(isCheck).parent().remove();
                        }
                    });
                    _this.calcTotal();
                    let currname = getCookie("username");
                    _this.deleteCartGood(goodsId, currname);

                });



            })
        },


        // //计算总价格
        calcTotal: function () {
            var _this = this;
            let good_sum = $(".good_sum").children("span");
            let goodsTotal = 0;
            let ischecked = false;
            $.each(good_sum, function (indexInArray, valueOfElement) {
                ischecked = good_sum.eq(indexInArray).parent().siblings(".checkboxs")[0].checked;
                if (ischecked) {
                    goodsTotal += parseFloat(good_sum.eq(indexInArray).html());
                }
            });
            $("#totalmoney").html(goodsTotal + '.00');
            this.selectednum(); //获取总个数和已选择的个数
        },

        //获取总共多少商品和已选择商品的个数
        selectednum: function () {
            let $checkboxs = $(".good_info .checkboxs");
            // console.log($checkboxs);
            if ($checkboxs.length == 0) {
                $("#totalcount").html("0");
                $("#selectcount").html("0");
            };
            let selected = 0;
            $.each($checkboxs, function (indexInArray, valueOfElement) {
                if (($checkboxs)[indexInArray].checked) {
                    selected++;
                }
            });
            $("#totalcount").html($checkboxs.length);
            $("#selectcount").html(selected);
        },

        //更新购物车商品数量
        updateGoodNum: function (gid, num, name) {
            if (gid.length != 5 || num < 0 || num > 9 || name == "" || name == undefined || name == null) {
                return;
            }
            $.post("http://localhost:1012/meizu/admin/php/updateGoodsCount.php",
                "username=" + name + "&goodsId=" + gid + "&goodsCount=" + num,
                function (data, textStatus, jqXHR) {
                    // console.log(data);
                    if (data != "1") {
                        alert("错误", "修改商品数量出错");
                    }
                },
                "text"
            );
        },

        //删除购物车商品
        deleteCartGood: function (gids, name) {
            if (name == "" || name == undefined || name == null) {
                return;
            }
            let len = gids.length;
            for (let i = 0; i < len; i++) {
                if (gids[i].length > 5) {
                    return;
                }
            }
            for (let i = 0; i < len; i++) {
                $.post("http://localhost:1012/meizu/admin/php/deleteUserCart.php",
                    "username=" + name + "&goodsId=" + gids[i],
                    function (data, textStatus, jqXHR) {
                        console.log(data);
                        if (data != "1") {
                            alert("错误", "删除商品出错");
                        } else {
                            window.location.reload();
                        }
                    },
                    "text"
                );
            }
        },

        //获取购物车商品数量
        getCartNum: function (currname) {
            $.post("http://localhost:1012/meizu/admin/php/GetCartCount.php",
                "username=" + currname,
                function (data, textStatus, jqXHR) {
                    // console.log(data);
                    // $(".goodnum").html(parseInt(data));
                    if (parseInt(data) == 0) {
                        $(".nogood h3").html("亲，快去挑选商品吧！")
                        $(".nogood p").html("购物车内未发现宝贝，快去挑选吧！");
                        $(".nogood a").attr("href", "shop_list.html");
                        $(".nogood a").html("去挑选");
                        $(".nogood").css("display", "block");
                        $(".goods").css("display", "none");
                    } else {
                        $(".nogood").css("display", "none");
                        $(".goods").css("display", "block");
                    }
                }, "text"
            );

        },

        //获取和商品ID符合的数据
        getUserCart: function (name) {
            var _this = this;
            $.ajax({
                type: "post",
                url: "http://localhost:1012/meizu/admin/php/getShoppingCart.php", //返回匹配符合商品ID的商品数据
                data: "username=" + name,
                dataType: "text",
                success: function (response) {
                    console.log(JSON.parse(response));
                    if (JSON.parse(response)) {
                        _this.insertGood(JSON.parse(response));
                    } else {
                        alert("错误", "返回数据不是一个JSON");
                    }
                },
            });
        },

        //插入商品数据 渲染到页面
        insertGood: function (data) {
            var _this = this;
            let total = 0,
                HtmlStr = '';
            $.each(data, function (indexInArray, valueOfElement) {
                total = parseFloat(data[indexInArray].goodsPrice) * parseInt(data[indexInArray].goodsCount);
                HtmlStr += "<div class='good_info' data-gid='" + data[indexInArray].goodsId + "'> <input type='checkbox' class='checkboxs'/>" +
                    "<img src='" + data[indexInArray].goodsImg + "'/><div class='good_intro'><h4>" + data[indexInArray].goodsName +
                    "</h4><p>" + data[indexInArray].goodsType + '  ' + data[indexInArray].yanse + '  ' + data[indexInArray].neicun + '  ' + data[indexInArray].taocan + "</p></div>" +
                    "<p class='good_price'>￥<span>" + data[indexInArray].goodsPrice + '.00' + "</span></p>" +
                    "<div class='good_num'><input type='button' value='-' class='numSub btn''/>" +
                    "<input type='text' class='num' value='" + data[indexInArray].goodsCount + "'/>" +
                    "<input type='button' value='+' class='numAdd btn'/></div>" +
                    "<p class='good_sum'>￥<span>" + total + ".00" + "</span></p>" +
                    "<div class='add' data-gid='" + data[indexInArray].goodsId + "'></div></div>";
            });
            $(".buyBytheway").after(HtmlStr);
            this.calcTotal();

        },

        //删除购物车商品
        deleteCartGood: function (gids, name) {
            if (name == "" || name == undefined || name == null) {
                return;
            }
            let len = gids.length;
            for (let i = 0; i < len; i++) {
                if (gids[i].length > 5) {
                    return;
                }
            }
            for (let i = 0; i < len; i++) {
                $.post("http://localhost:1012/meizu/admin/php/deleteUserCart.php",
                    "username=" + name + "&goodsId=" + gids[i],
                    function (data, textStatus, jqXHR) {
                        console.log(data);
                        if (data != "1") {
                            alert("错误", "删除商品出错");
                        } else {
                            window.location.reload();
                        }
                    },
                    "text"
                );
            }

        }

    }
}())