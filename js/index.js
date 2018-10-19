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
            //轮播图
            var swiper = new Swiper('.swiper-container', {
                loop: true, // 无限轮播
                speed: 300, // 轮播速度
                autoplay: {
                    delay: 5000, // 3秒轮播一次
                    disableOnInteraction: false, // 在点击之后可以继续实现轮播
                },
                pagination: {
                    el: '.swiper-pagination', // 让小圆点显示
                    clickable: true, // 实现小圆点点击
                },
            });
            !$(function () {
                //渲染二级导航栏
                for (var i = 0; i < 8; i++) {
                    $('.nav-phone').prepend('<li><a href="shop_list.html"><img src="images/sj3.png" /><p>魅族 16th</p>￥<span>2698起</span></a></li>');
                }
                //渲染轮播下面第一行
                for (var i = 0; i < 4; i++) {
                    $('.section-box-ul').prepend('<li><a href="shop_list.html"><img src="images/meiyou.jpg" alt=""><h2>魅友节</h2><p>年度盛宴 嗨购新机</p></a></li>');
                }
                //渲染手机最下面的四个
                for (var i = 0; i < 4; i++) {
                    $('.phone-list').prepend('<li><a href="shop_list.html">' +
                        '<img src="images/phone-list.png" alt="">' +
                        '<h2>魅族 16X</h2>' +
                        '<p>骁龙710 轻奢旗舰</p>' +
                        '<span>￥2098<em>起</em></span>' +
                        '</a></li>')
                }
                //渲染下面相同结构
                for (var i = 0; i < 2; i++) {
                    $('.phone-box').after('<div class="phone-h3-box" id="erji-page">' +
                        '<h3 class="phone-h3">魅族声学</h3>' +
                        '</div>' +
                        '<div class="phone-banner-bbox">' +
                        '<a class="phone-banner-box" href="#"><img src="images/sx.jpg" alt=""></a>' +
                        '</div>' +
                        '<div class="phone-box erji">' +
                        '<ul class="phone-list">' +
                        '<li><a href="#">' +
                        '<img class="erji-img" src="images/erji4.jpg" alt="">' +
                        '</a></li>' +
                        '<li><a href="#">' +
                        '<img src="images/erji.png" alt="">' +
                        '<h2>魅族EP-31耳机</h2>' +
                        '<p>舒适均衡 精致优雅</p>' +
                        '<span>￥199</span>' +
                        '</a></li>' +
                        '<li><a href="#">' +
                        '<img src="images/erji.png" alt="">' +
                        '<h2>魅族EP-31耳机</h2>' +
                        '<p>舒适均衡 精致优雅</p>' +
                        '<span>￥199</span>' +
                        '</a></li>' +
                        '<li><a class="last-a" href="#">' +
                        '<img src="images/erji.png" alt="">' +
                        '<h2>魅族EP-31耳机</h2>' +
                        '<p>舒适均衡 精致优雅</p>' +
                        '<span>￥199</span>' +
                        '</a></li>' +
                        '</ul>' +
                        '<ul class="phone-list">' +
                        '<li><a href="#">' +
                        '<img class="erji-img" src="images/erji5.jpg" alt="">' +
                        '</a></li>' +
                        '<li><a href="#">' +
                        '<img src="images/erji3.png" alt="">' +
                        '<h2>魅族 LIVE 四单元动铁耳机</h2>' +
                        '<p>享12期免息</p>' +
                        '<span>￥1199</span>' +
                        '</a></li>' +
                        '<li><a href="#">' +
                        '<img src="images/erji3.png" alt="">' +
                        '<h2>魅族 LIVE 四单元动铁耳机</h2>' +
                        '<p>享12期免息</p>' +
                        '<span>￥1199</span>' +
                        '</a></li>' +
                        '<li><a class="last-a" href="#">' +
                        '<img src="images/erji3.png" alt="">' +
                        '<h2>魅族 LIVE 四单元动铁耳机</h2>' +
                        '<p>享12期免息</p>' +
                        '<span>￥1199</span>' +
                        '</a></li>' +
                        '</ul>' +
                        '</div>');
                }
                // 智能设备内容渲染
                var zhineng_h3 = $('.phone-h3-box').eq(2);
                zhineng_h3.attr('id', 'zn-page');
                zhineng_h3.find('.phone-h3').text('智能设备');
                var zhineng_banner = $('.phone-banner-bbox').eq(2);
                zhineng_banner.find('img').attr('src', 'images/zn.jpg');

                // 生活周边设备内容渲染
                var shenghuo_h3 = $('.phone-h3-box').eq(3);
                shenghuo_h3.attr('id', 'sh-page');
                shenghuo_h3.find('.phone-h3').text('生活周边');
                var shenghuo_banner = $('.phone-banner-bbox').eq(3);
                shenghuo_banner.find('img').attr('src', 'images/sh.jpg');


                //点击导航栏内容滑动到相应位置 
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
                hover_color('.user', '', 'color', '#00b9f2', '#000');



                // // //回到顶部效果
                back_top('.slide_last');

                //滚动条距离顶部多少时显示隐藏
                slide_show_hide('.slideBar');


                //cookie判断改变用户样式

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
                    //发送ajax请求获取购物车的商品数量 显示在小红点上面
                    getCartNum(getCookie('username'));
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
            $('.nav-box').stop().slideDown(400);
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