$(function () {
    //右上角点击二维码切换二维码登录效果
    $('.ysj').click(function (e) {
        $('.loginBySMS').hide();
        $('.qrlogin').show(100);
    });
    $('.qrlogin').click(function (e) {
        $('.ysj').css({
            'background': 'url(images/login_qr.png)',
            'cursor': 'pointer'
        });
        $('.qrlogin').hide(100);
    });
    //点击上方连接，切换登录方式
    $(".tit a").click(function (e) {
        e.preventDefault();
        $(this).addClass("titblue").siblings().removeClass("titblue");
        //点击切换登录方式清除原来input框的内容
        $.each($(".inputs"), function (indexInArray, valueOfElement) {
            if ($.trim($(".inputs").eq(indexInArray).val()) != '') {
                $(".inputs").eq(indexInArray).val('');
            }
        });
        if ($(this).text() == "验证码登录") {
            $(".loginBySMS").show().animate({
                "left": 0
            }, 500);
            $(".tit").attr("data-type", "code");
        } else {
            $(".loginBySMS").hide().css({
                "left": 340
            }, 500);
            $(".tit").attr("data-type", "name");
        }
    });

    //点击发送验证码后的倒计时效果
    $(".loginBySMS a").click(function (e) {
        e.preventDefault();
        let num = 60;
        let innerTimer = setInterval(
            function () {
                num--;
                if (num <= 0) {
                    $(".loginBySMS a").text("获取验证码");
                    clearInterval(innerTimer);
                    return;
                }
                $(".loginBySMS a").text(num + "秒后重新获取");
            }, 1000);
    });

    
    //国际区号选择框
    $("#areacode").click(function (e) {
        e.preventDefault();
        $(".phoneCode").show(function () {
            $(".phoneCode li").click(function () {
                // console.log($(this).attr("data-code"));
                $("#areacode").html($(this).attr("data-code"));
                $(".phoneCode").hide(function () {
                    $(".phoneCode li").click(null);
                });
            });

        });
    });
    $(document).on("click", function (event) {
        let e = event || window.event;
        //console.log(e);
        if (e.target.className != "phoneCode" && e.target.id != "areacode") {
            $(".phoneCode").hide(function () {
                $(".phoneCode li").click(null);
            });
        }
    });
});
