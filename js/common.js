//可以让另一个JS调用这里的函数
!$(function () {
  //点击XX划到你想要的位置
  var click_scroll = window.click_scroll = function (ele) {
    var scroll_offset = $(ele).offset().top;
    $("body,html").animate({
      scrollTop: scroll_offset
    }, 400);
  };

  //获取cookie的用户名
  var getCookie = window.getCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return unescape(arr[2]);
    else
      return null;
  };

  //删除cookie的用户名
  var delCookie = window.delCookie = function (name) {
    var _this = this;
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = _this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  };

  //改变二级菜单商品详情
  var nav_shop = window.nav_shop = function (ele) {
    $(ele).mouseover(function () {
      if (ele == '.sj') {
        $('.nav-phone a img').attr('src', 'images/sj3.png');
      }
      if (ele == '.sx') {
        $('.nav-phone a img').attr('src', 'images/erji2.png');
      }
      if (ele == '.zn') {
        $('.nav-phone a img').attr('src', 'images/zhineng.png');
      }
      if (ele == '.sh') {
        $('.nav-phone a img').attr('src', 'images/shenghuo.png');
      }
    })
  };

  // // //回到顶部效果
  var back_top = window.back_top = function (ele) {
    $(ele).click(function (e) {
      e.preventDefault()
      $('body,html').animate({
        'scrollTop': 0
      }, 500)
    })
  };

  //滚动条距离顶部多少时显示隐藏
  var slide_show_hide = window.slide_show_hide = function (ele) {
    $(document).scroll(function () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 300) {
        $(ele).show()
      } else {
        $(ele).hide()
      }
    })
  }

  //鼠标滑过变色
  var hover_color = window.hover_color = function (ele, ele2, attr, color, color2) {
    $(ele).hover(function () {
      $(this || ele2).css(attr, color);
    }, function () {
      $(this || ele2).css(attr, color2);
    })
  }

  //鼠标滑过显示隐藏
  var hover_show_hide = window.hover_show_hide = function (ele, ele2) {
    $(ele).hover(function () {
      $(ele2).show();
    }, function () {
      $(ele2).hide();
    });
  }

  //鼠标滑过从上往下显示、隐藏
  var hover_slide = window.hover_slide = function (ele, ele2) {
    $(ele).hover(function () {
      $(ele2).stop().slideDown();
    }, function () {
      $(ele2).stop().slideUp();
    });
  }

  //读取网址 给网址后面加一个search 用于页面点击登录后跳转到登录页面，登陆成功跳回到本页面
  var url = window.url = function (ele) {
    var href = $(ele).attr('href'); //获取点击后跳转的网址
    var url = window.location.href; // 获取当前的网址
    $(ele).attr('href', href + '?redirect=' + url); //拼接
  }

  //发送ajax请求获取购物车的商品数量 显示在小红点上面 ele是用户名
  var getCartNum = window.getCartNum = function (ele) {
    $.post("http://localhost:1012/meizu/admin/php/GetCartCount.php",
      "username=" + ele,
      function (data, textStatus, jqXHR) {
        $(".goodnum").html(parseInt(data)||0);
      },
      "text"
    )
  }

})