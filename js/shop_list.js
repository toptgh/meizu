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

            //读取网址 给网址后面加一个search
            $(document).ready(function () {
                var href = $('#user-login').attr('href'); //获取点击后跳转的网址
                var url = window.location.href;// 获取当前的网址
                $('#user-login').attr('href', href + '?redirect=' + url);//拼接

            });

            //点击底下图片显示大图
            $(".imgxiao img").click(function (e) {
                // e.preventDefault();
                var img = $(this).attr('src'); //获取当前图片路径
                $(".imgbox_show img").attr({
                    'src': img, //把当前图片路径给大图片
                });
                $(".imgbox_show img").css({
                    "opacity": 0.4,//大图透明度
                });
                $(".imgbox_show img").animate({
                    "opacity": 1
                }, 700);
            });

            //选套餐按钮的点击加边框
            $(".choice_btn button").click(function (e) { 
                //e.preventDefault();
                $(this).addClass('buttonclicked').siblings().removeClass('buttonclicked');//选中的框添加边框的class，旁边的移除class
                let type=$(this).html();//获取当前框的内容
                $(this).parent().parent().attr("data-type",type); //把当前框的内容当值以自定义属性添加到祖父身上 方便后期获取
                let addfei=0;
                let defaultPrice=2798; //默认价格
                let $choices=$(".buttonclicked");//获取所有选中的框
                //each 遍历选中框
                $.each($choices, function (indexInArray, valueOfElement) { 
                    addfei+=parseInt($choices.eq(indexInArray).attr("data-addfei"))//获取所有选中框的class值，这个class的值是每个套餐都有不同的价格
                });
                if(addfei<=0){  //判断选中的套餐有没有要加钱的
                    $("#price").html(defaultPrice+'.00'); //没有则顶部显示默认价格 
                }else{
                    $("#price").html(defaultPrice+addfei+'.00');//有则显示在顶部价格为所选中套餐的价格总和 
                }
            });
            //选中型号改变头部型号
            $('.btnname').click(function(){
                let PhoneName=$(this).text();
                $('.phone_name').text(PhoneName);
            })
           
           

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
        },


    }
}())