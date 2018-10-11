var shop_list = (function () {
    return {
        init: function () {
            this.event();
            this.nav_style();
            this.nav_mouseenter();
            this.nav_mouseleave();
        },
        event: function () {
            var _this = this;
            //这里调用的函数都是common.js里面的函数 通过!$(function(){})实现
            !$(function () {

                // 用户的显示隐藏
                hover_slide('.header-user', '.user-list');

                // 用户列表变色
                hover_color('.user','','color', '#00b9f2', '#000');
                hover_color('.user-list li','','background', '#ccc', '#fff');
                // nav变色
                hover_color('.header-nav a','','color', '#00b9f2', '#000');
               
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
                    $('.userma').css('display','block');
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
                    $('.userma').css('display','none');
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
    }
}())