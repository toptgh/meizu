var login = (function () {

    return {
        init: function (ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn']; //账号登录
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            this.$loginBtn2 = this.$ele['login-btn2']; //验证码登录
            this.$usernameInp2 = this.$ele['username2'];
            this.$passwordInp2 = this.$ele['password2'];
            this.event();
        },
        event: function () {
            var _this = this;
            // 账号登录
            this.$loginBtn.onclick = function () {
                    // 发送ajax，验证用户名和密码
                    var params = {
                        method: 'post',
                        data: {
                            username: _this.$usernameInp.value,
                            password: _this.$passwordInp.value
                        },
                        success: function (data) {
                            data = JSON.parse(data);
                            _this.loginSuccess(data);
                        }
                    }
                    sendAjax('http://localhost:1012/meizu/admin/php/login.php', params);
                },

                //验证码登录
                this.$loginBtn2.onclick = function () {
                    if ($.trim($("#phonenum").val()) != '' && $.trim($("#smstext").val()) != '') { //验证手机号
                        let phonereg = /^1[3-9]\d{9}$/;
                        let phonenum = $.trim($("#phonenum").val());
                        if (phonereg.test(phonenum)) {
                            let smstext = $.trim($("#smstext").val());
                            if (smstext.length == 6) {
                                // 发送ajax，验证用户名和密码
                                var params = {
                                    method: 'post',
                                    data: {
                                        username: _this.$usernameInp2.value,
                                        password: _this.$passwordInp2.value
                                    },
                                    success: function (data) {
                                        data = JSON.parse(data);
                                        _this.loginSuccess2(data);
                                    }
                                }
                                sendAjax('http://localhost:1012/meizu/admin/php/login.php', params);
                            } else {
                                _this.ShowMsg('请输入六位验证码');
                            }
                        } else {
                            _this.ShowMsg('请输入正确的手机号码');
                        }
                    } else {
                        _this.ShowMsg('手机号或者验证码不能为空');
                    }
                }
        },


        loginSuccess: function (data) {
            if (data.code == 200) {
                // 后台会返回一个token值
                // token 是用户登录成功时,后台自动生成的一串代码
                // 每次发送请求时,都携带这个token值,后台才能确定当前用户登录成功,才会返回数据
                document.cookie = "token=" + data.data.token;
                document.cookie = "user-id=" + data.data.id;
                //记录登录状态 保存到cookie
                if ($(".rember input").is(':checked')) {
                    document.cookie = "username=" + data.data.username;
                    location.href = 'http://localhost:1012/meizu/index.html';
                } else {
                    location.href = 'http://localhost:1012/meizu/index.html';
                    document.cookie = "username=" + data.data.username;
                }
            } else {
                if (($.trim($("#username").val()) != '') && ($("#password").val() != '')) {
                    this.ShowMsg(data.msg);
                } else {
                    this.ShowMsg('用户名或者密码不能为空');
                }
            }
        },

        loginSuccess2: function (data) {
            if (data.code == 200) {
                document.cookie = "token=" + data.data.token;
                document.cookie = "user-id=" + data.data.id;
                location.href = 'http://localhost:1012/meizu/index.html';
            } else {
                if (($.trim($("#phonenum").val()) != '') && ($("#smstext").val() != '')) {
                    this.ShowMsg('验证码错误');
                } else {
                    this.ShowMsg('手机号或者验证码不能为空');
                }
            }
        },

        //提示信息
        ShowMsg: function (str) {
            $("#login_msg").text(str);
            $("#login_msg").show(100);
            setTimeout(function () {
                $("#login_msg").hide(200);
            }, 2000);
        },

    }

}())