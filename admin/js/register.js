var register = (function () {
    return {
        init: function (ele) {
            // 获取form表单
            this.$ele = document.querySelector(ele);
            // 获取提交按钮
            this.$loginBtn = this.$ele['login-btn'];
            this.$usernameInp = this.$ele['username'];
            this.$passwordInp = this.$ele['password'];
            this.event();
        },
        event: function () {
            var _this = this;
            // 提交按钮
            this.$loginBtn.onclick = function () {
                //正则验证用户名密码
                if (($.trim($("#phonenum").val()) != '') && ($("#password").val() != '')) {
                    let username = $.trim($("#phonenum").val());
                    let phonereg = /^1[3-9]\d{9}$/;
                    let namereg = /^[a-zA-Z_]\w{5,14}$/;
                    let password = $("#password").val();
                    let passwordreg = /\w{6,14}/;
                    //正则验证用户名和密码
                    if ((phonereg.test(username) || namereg.test(username)) && passwordreg.test(password)) {
                        // 发送ajax，验证用户名和密码
                        var params = {
                            method: 'post',
                            data: {
                                username: _this.$usernameInp.value,
                                password: _this.$passwordInp.value
                            },
                            success: function (data) {
                                data = JSON.parse(data);
                                _this.register(data);
                            }
                        }
                        sendAjax('admin/php/register.php', params);
                    } else {
                        _this.ShowMsg('用户名和密码不符合要求');
                    }
                } else {
                    _this.ShowMsg("用户名或密码不能为空");
                }
            }

            // 判断用户名称是否存在 然后让输入框变色
            // this.$usernameInp.addEventListener('change', function () {
            //     var params = {
            //         method: 'post',
            //         data: {
            //             username: _this.$usernameInp.value
            //         },
            //         success: function (data) {
            //             data = JSON.parse(data);
            //             _this.checkUsername(data);
            //         }
            //     }
            //     sendAjax('http://localhost:1012/meizu/admin/php/check_username.php', params);
            // }, false);
        },
        // checkUsername: function (data) {
        //     if (data.code == 200) {
        //         //这里写样式
        //     } else {
        //        //这里写样式
        //     }
        // },

        register: function (data) {
            if (data.code == 200) {
                //   注册成功
                alert('注册成功！请返回登录');
                window.location.href = 'login.html';
            } else if (data.code == 1000) {
                //用户名已存在
                this.ShowMsg(data.msg);
            } else {
                //未知错误
                this.ShowMsg(data.msg);
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