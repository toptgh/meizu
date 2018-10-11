var index = (function () {
    return {
        init: function (ele) {
            this.event();
            this.nav_style();
            this.nav_mouseenter();
            this.nav_mouseleave();
        },
        event: function () {
            var _this = this;
            //这里调用的函数都是common.js里面的函数 通过!$(function(){})实现
            !$(function () {
                //点击导航栏a滑动到相应位置 
                $('.sj').click(function (e) {
                    e.preventDefault();
                    click_scroll('#phone-page');
                });
                $('.sx').click(function (e) {
                    e.preventDefault();
                    click_scroll('#erji-page');
                });
                $('.zn').click(function (e) {
                    e.preventDefault();
                    click_scroll('#zn-page');
                });
                $('.sh').click(function (e) {
                    e.preventDefault();
                    click_scroll('#sh-page');
                });

                // 用户的显示隐藏
                hover_show_hide('.header-user', '.user-list');


                // 用户列表变色
                hover_color('.user','','color', '#00b9f2', '#000');

                
                
                // // //回到顶部效果
                back_top('.slide_last');

                //滚动条距离顶部多少时显示隐藏
                slide_show_hide('.slideBar');


                //cookie判断
                if (getCookie('username') != null) {
                    $('.header-user').css('background', 'url(images/user-touxiang.png) no-repeat'); // 换用户背景图
                    $('#user-login').text('个人中心');
                    $('#user-login').attr('href', '#');
                    $('#user-register').text('我的订单');
                    $('#user-register').attr('href', 'shop_car.html');
                    $('#user-order').text('M码通道');
                    $('#user-order').attr('href', '#');
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
                    $('.header-user').css('background', 'url(images/icon-user-white.png) no-repeat');
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
                $(this).css('color', '#00b9f2'); //字体颜色变蓝
            })
            $('.fy,.fw,.zmd,.sq').mouseenter(function () {
                _this.nav_mouseleave();
                $(this).css('color', '#00b9f2'); //字体颜色变蓝
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
            $('.header-nav a').css('color', '#000'); // 鼠标经过字体变黑
            $('#headerbox').css('background', 'rgba(255, 255, 255, 1)'); // 去掉背景
            //cookie判断 用户登陆状态改变样式
            !$(function () {
                if (getCookie('username') != null) {
                    $('.header-user').css('background', 'url(images/user-touxiang.png) no-repeat'); // 换登录用户背景图
                };
                if (getCookie('username') == null) {
                    $('.header-user').css('background', 'url(images/icon-user.png) no-repeat'); // 换未登录用户背景图
                };
            });
            $('.header-logo').css('background', 'url(images/logo-blue.png) no-repeat center'); // 换logo背景图
            $('.header-car').css('background', 'url(images/shop_car_icon.png) no-repeat bottom right'); // 换购物车背景图
            $('.nav-box').slideDown(200);
        },

        nav_mouseleave: function () {
            $('.header-nav a').css('color', '#fff'); // 鼠标移开字体变回白色
            $('#headerbox').css('background', 'rgba(255, 255, 255, 0)'); // 去掉背景
            //cookie判断 用户登陆状态改变样式
            !$(function () {
                if (getCookie('username') != null) {
                    $('.header-user').css('background', 'url(images/user-touxiang.png) no-repeat'); // 换登录用户背景图
                };
                if (getCookie('username') == null) {
                    $('.header-user').css('background', 'url(images/icon-user-white.png) no-repeat'); // 换未登录用户背景图
                };
            });
            $('.header-car').css('background', 'url(images/shopping-cart-white.png) no-repeat bottom right')
            $('.header-logo').css('background', 'url(images/logo-white.png) no-repeat center');
            $('.nav-box').hide(); // 二级菜单隐藏
        },
    }
}())