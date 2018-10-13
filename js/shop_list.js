var shop_list = (function () {
    return {
        init: function () {
            this.event();
            this.nav_style();
            this.nav_mouseenter();
            this.nav_mouseleave();
            this.lunbo();
        },
        event: function () {
            var _this = this;

            //点击底下图片显示大图
            $(".imgxiao img").click(function (e) {
                // e.preventDefault();
                var img = $(this).attr('src'); //获取当前图片路径
                $(".imgbox_show img").attr({
                    'src': img, //把当前图片路径给大图片
                });
                $(".imgbox_show img").css({
                    "opacity": 0.4, //大图透明度
                });
                $(".imgbox_show img").animate({
                    "opacity": 1
                }, 700);
            });

            //选套餐按钮的点击加边框
            $(".choice_btn button").click(function (e) {
                //e.preventDefault();
                $(this).addClass('buttonclicked').siblings().removeClass('buttonclicked'); //选中的框添加边框的class，旁边的移除class
                let type = $(this).html(); //获取当前框的内容
                $(this).parent().parent().attr("data-type", type); //把当前框的内容当值以自定义属性添加到祖父身上 方便后期获取
                let addfei = 0;
                let defaultPrice = 2798; //默认价格
                let $choices = $(".buttonclicked"); //获取所有选中的框
                //each 遍历选中框
                $.each($choices, function (indexInArray, valueOfElement) {
                    addfei += parseInt($choices.eq(indexInArray).attr("data-addfei")) //获取所有选中框的class值，这个class的值是每个套餐都有不同的价格
                });
                if (addfei <= 0) { //判断选中的套餐有没有要加钱的
                    $("#price").html(defaultPrice + '.00'); //没有则顶部显示默认价格 
                } else {
                    $("#price").html(defaultPrice + addfei + '.00'); //有则显示在顶部价格为所选中套餐的价格总和 
                }
            });

            //选中型号改变头部型号
            $('.btnname').click(function () {
                let PhoneName = $(this).text();
                $('.phone_name').text(PhoneName);
            })

            //数量加减
            $(".changenum").click(function (e) {
                e.preventDefault();
                let num = parseInt($(this).siblings("input").val()); //获取input的值
                if ($(this).is(".addBtn")) {
                    num++;
                    if (num >= 9) {
                        num == 9;
                        $(".addBtn").attr("disabled", true);
                        $(".subBtn").removeAttr("disabled");
                    }
                    if (num > 1) {
                        $(".subBtn").removeAttr("disabled");
                    } else {
                        $(".subBtn").attr("disabled", true);
                    }
                    $(this).siblings("input").val(num);
                }
                if ($(this).is(".subBtn")) {
                    num--;
                    if (num <= 1) {
                        num == 1;
                        $(".subBtn").attr("disabled", true);
                        $(".addBtn").removeAttr("disabled");
                    }
                    $(this).siblings("input").val(num);
                }
            });

            //选择手机颜色改变左边展示图片颜色
            $('.black_img').click(function () {
                _this.change_img('.imgbox_show img', 'images/hei.jpg', '.click1 img', 'images/hei.jpg',
                    '.click2 img', 'images/hei2.jpg', '.click3 img', 'images/hei3.jpg', '.click4 img', 'images/hei4.jpg');
            });
            $('.white_img').click(function () {
                _this.change_img('.imgbox_show img', 'images/16th.jpg', '.click1 img', 'images/16th.jpg',
                    '.click2 img', 'images/16th2.jpg', '.click3 img', 'images/16th3.jpg', '.click4 img', 'images/16th4.jpg');
            });
            $('.blue_img').click(function () {
                _this.change_img('.imgbox_show img', 'images/lan.jpg', '.click1 img', 'images/lan.jpg',
                    '.click2 img', 'images/lan2.jpg', '.click3 img', 'images/lan3.jpg', '.click4 img', 'images/lan4.jpg');
            });




            //这里调用的函数都是common.js里面的函数 通过!$(function(){})实现
            !$(function () {

                // 用户的显示隐藏
                hover_slide('.header-user', '.user-list');

                // 用户列表变色
                hover_color('.user', '', 'color', '#00b9f2', '#000');
                hover_color('.user-list li', '', 'background', '#eeeeee', '#fff');
                // nav变色
                hover_color('.header-nav a', '', 'color', '#00b9f2', '#000');

                // // //回到顶部效果
                back_top('.slide_last');

                //滚动条距离顶部多少时显示隐藏
                slide_show_hide('.slideBar');

                //cookie判断
                if (getCookie('username') != null) {
                    $('.header-user').css('background', 'url(images/user-touxiang.png) no-repeat'); // 换用户背景图
                    $('#user-login').text('我的订单');
                    $('#user-login').attr('href', 'shop_car.html');
                    $('#user-register').text('消息通知');
                    $('#user-register').attr('href', '#');
                    $('#user-order').text('我的收藏');
                    $('#user-order').attr('href', '#');
                    $('.userma').css('display', 'block');
                    $('#user-M').text('退出登录');
                    $('#user-M').attr('href', 'login.html');
                    $('#user-M').click(function (e) {
                        e.preventDefault();
                        alert('用户' + getCookie('username') + '已退出登录');
                        delCookie("username");
                        location.reload();
                    });
                    //获取当前用户购物车的商品数量
                    getCartNum(getCookie('username'));
                };
                if (getCookie('username') == null) {
                    $('.userma').css('display', 'none');
                    $('.header-user').css('background', 'url(images/icon-user.png) no-repeat');
                }

                ////改变二级菜单商品详情
                nav_shop('.sj');
                nav_shop('.sx');
                nav_shop('.zn');
                nav_shop('.sh');

                //本页面点击登录 登陆成功返回本页面
                url('#user-login'); //顶部登录


                //加入购物车
                $(".gotocart").click(function (e) {
                    if (getCookie("username") == null) { //未登录
                        if ($(this).is('.buy')) { //立即购买按钮
                            window.location.href = 'http://localhost:1012/meizu/login.html?redirect=http://localhost:1012/meizu/shop_list.html';
                        }
                        if ($(this).is('.car')) { //加入购物车按钮
                            alert('检测到您还未登录,请在页面右上角点击登录~');
                        }
                    } else { //已登录
                        let username = getCookie("username"); //获取用户名
                        let count = parseInt($("#boughtNum").val()); //获取商品数量
                        let cid = '';
                        //遍历获取每个选中框的data-id存到cid上面
                        $.each($(".buttonclicked"), function (indexInArray, valueOfElement) {
                            cid += this.getAttribute("data-id");
                        });
                        console.log(cid);
                        // console.log("username=" + username + "&cid=" + cid + "&count=" + count);
                        //AJAX 发送POST请求 (url,data,success(data,textStatus,jqXHR),dataType)
                        $.post("http://localhost:1012/meizu/admin/php/addToCart.php",
                            "username=" + username + "&cid=" + cid + "&count=" + count,
                            function (data, textStatus, jqXHR) {
                                // console.log(data);
                                if (data == '1') {
                                    alert('成功加入购物车！');
                                    _this.getCartNum(username); //获取购物车商品数量
                                } else {
                                    alert('加入购物车失败！');
                                }
                            }, "text");
                        _this.uploadgoods(cid); //上传选中的套餐数据
                    }
                });



            })
        },
        nav_style: function () {
            var _this = this;
            // 导航栏的显示
            $('.sj,.sx,.zn,.sh,.xz,.nav-phone').mouseenter(function () {
                _this.nav_mouseenter();
                // $(this).css('color', '#00b9f2'); //字体颜色变蓝
            })
            $('.fy,.fw,.zmd,.sq').mouseenter(function () {
                _this.nav_mouseleave();
            })
            // 隐藏
            $('#headerbox,.nav-phone').mouseleave(function () {
                _this.nav_mouseleave();
            })
            // 二级菜单栏下鼠标移动到搜索框 用户 购物车 还原首页样式
            $('.header-search,.header-user,.header-car').mouseenter(function () {
                _this.nav_mouseleave();
            })
        },

        nav_mouseenter: function () {
            //cookie判断 用户登陆状态改变样式
            !$(function () {
                if (getCookie('username') != null) {
                    $('.header-user').css('background', 'url(images/user-touxiang.png) no-repeat'); // 换登录用户背景图
                };
                if (getCookie('username') == null) {
                    $('.header-user').css('background', 'url(images/icon-user.png) no-repeat'); // 换未登录用户背景图
                };
            });
            $('.nav-box').slideDown(200);
        },

        nav_mouseleave: function () {

            //cookie判断 用户登陆状态改变样式
            !$(function () {
                if (getCookie('username') != null) {
                    $('.header-user').css('background', 'url(images/user-touxiang.png) no-repeat'); // 换登录用户背景图
                };
                if (getCookie('username') == null) {
                    $('.header-user').css('background', 'url(images/icon-user.png) no-repeat'); // 换未登录用户背景图
                };
            });
            $('.nav-box').hide(); // 二级菜单隐藏
        },

        //轮播图
        lunbo: function () {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 5,
                spaceBetween: 10, //每个滑块距右边的距离
                slidesPerGroup: 5,
                loop: true,
                loopFillGroupWithBlank: true,
                speed: 500, // 轮播速度
                autoplay: {
                    delay: 5000, // 3秒轮播一次
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            //swiper鼠标进入时停止轮播，移出自动开始
            $(".swiper-container").mouseenter(function () {
                swiper.autoplay.stop();
            });
            $(".swiper-container").mouseleave(function () {
                swiper.autoplay.start();
            });
        },

        //改变右边展示图路径
        change_img: function (ele1, e1, ele2, e2, ele3, e3, ele4, e4, ele5, e5) {
            $(ele1).attr('src', e1);
            $(ele2).attr('src', e2);
            $(ele3).attr('src', e3);
            $(ele4).attr('src', e4);
            $(ele5).attr('src', e5);
        },



        //上传选中的套餐数据
        uploadgoods: function (cid) {
            let xinghao = $(".xinghao").attr("data-type"); //型号
            let wangluo = $(".wangluo").attr("data-type"); //网络
            let yanse = $(".yanse ").attr("data-type"); //颜色
            let neicun = $(".neicun").attr("data-type"); //内存
            let taocan = $(".taocan").attr("data-type"); //套餐
            let price = parseFloat($("#price").html()); //价格
            let scount = 1; //parseInt($("#boughtNum").val());//数量
            let sendStr = "goodsId=" + cid + "&goodsName=" + xinghao + "&goodsType=" + wangluo +
                "&beiyong1=" + yanse + "&beiyong2=" + neicun + "&beiyong3=" + taocan +
                "&goodsPrice=" + price + "&goodsCount=" + scount;
            console.log(sendStr);
            $.post("http://localhost:1012/meizu/admin/php/saveGoods.php",
                sendStr,
                function (data, textStatus, jqXHR) {
                    console.log(data);
                }, "text"
            );
        }

    }
}())