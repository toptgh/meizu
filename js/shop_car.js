var shop_car = (function () {
    return {
        init: function () {
            this.event();
        },
        event: function () {
            var _this = this;
            //读取网址 给网址后面加一个search
            $(document).ready(function () {
                var href = $('.login_car').attr('href');
                var url = window.location.href;
                $('.login_car').attr('href', href + '?redirect=' + url);
            });
        },
    }
}())