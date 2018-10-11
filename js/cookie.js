window.onload = function () {
    function addCookie(item, value, dayCount) {
        var d = new Date();
        if (dayCount == undefined || dayCount == 0) {
            d.setDate(d.getMinutes() + 10);
        } else {
            d.setDate(d.getDate() + dayCount);
        }
        document.cookie = item + "=" + escape(value) + ";expires=" + d.toGMTString();
    }

    function removeCookie(item) { //删除解析Cookie
        addCookie(item, "", -1);
    }

    function analysisCookie(item) { //解析Cookie
        var content = unescape(document.cookie);
        var cookcon = content.split("; ");
        for (var i in cookcon) {
            if (cookcon[i].indexOf(item + "=") == 0) {
                return cookcon[i].substring(cookcon[i].indexOf("=") + 1);
            }
        }
        return null;
    }
};