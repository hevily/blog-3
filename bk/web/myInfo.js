/**
 * Created by Administrator on 2017/5/5.
 */
$(function () {
    //修改密码
    $("#mobile1").text($.cookie('mobile'));
    $("#mobile2").val($.cookie('mobile'));
    $("#nickName").val($.cookie('nickname'));
    $('#pwdChanged').click(function () {
        if($("#newPwd").val()!=$("#confirmPsd").val())
        {
            $("#confirmError").text('两次密码不一致');
        }
        else if($.trim($("#oldPwd").val())==''||$.trim($("#newPwd").val())==''||$.trim($("#confirmPsd").val())=='')
        {
            $("#confirmError").text('请输入完整信息');
        }
        else {
            $.ajax({
                type:"post",
                url:"users?action=updatePassword",
                data:{
                    "userName":$("#mobile2").val(),
                    "oldPassword":$("#oldPwd").val(),
                    "newPassword":$("#newPwd").val(),
                },
                success:function (msgString) {
                    $("#confirmError").text('');
                    var json =JSON.parse(msgString);
                    // alert(list.code);
                    if(json.code=='200')
                    {
                        // alert('into 200')
                        alert('密码修改成功！');
                        window.location.href='/login.jsp';
                    }
                    else{
                        // alert('not into 200:'+msgString.msg+msgString.code)
                        $("#confirmError").text(json.msg);
                    }
                },
                error:function () {
                    alert('error')
                    $("#confirmError").text('error');
                }
            })
        }
    })

    //忘记密码
    $('#codePsdChanged').click(function () {
        if($.trim($("#codeMobile").val())==''||$.trim($("#code").val())==''||$.trim($("#newPsd").val())=='')
        {
            $("#codeConfirmError").text('请输入完整信息');
        }
        else {
            $.ajax({
                type:"post",
                url:"users?action=updatePasswordByCode",
                data:{
                    "mobile":$("#codeMobile").val(),
                    "authCode":$("#code").val(),
                    "newPassword":$("#newPsd").val(),
                },
                success:function (msgString) {
                    var json =JSON.parse(msgString);
                    $("#codeConfirmError").text('');
                    if(json.code=='200')
                    {
                        alert('密码修改成功！');
                        window.location.href='/login.jsp';
                    }
                    else {
                        $("#codeConfirmError").text("验证码错误");
                    }
                },
                error:function () {
                    alert('error:'+json)
                    $("#codeConfirmError").text('json.msg');
                }
            })
        }
    })
    //发送验证码
    function send(me) {
        var reg = /^1[34578]\d{9}$/;
        var mobile=$(me).parent('.code').siblings('#codeMobile').val();
        if (mobile == "" || mobile == "null") {
            $(me).parent('.code').siblings('.error').html('手机号不能为空');
        }
        else if (!reg.test(mobile)) {
            $(me).parent('.code').siblings('.error').html("请输入正确的手机号码");
        }
        else {
            $(me).parent('.code').siblings('.error').html("");
            $.ajax({
                type:"post",
                url:"users?action=sendCode",
                data:{
                    "mobile":mobile,
                },
                dataType:"json",
                success:function (msgString) {
                    if(msgString.code == '200')
                    {
                        var countdown=60;
                        function settime() {
                            if (countdown == 0) {
                                $(me).removeAttr("disabled");
                                $(me).val("获取验证码");
                                countdown = 60;
                                return;
                            } else {
                                $(me).attr("disabled", true);
                                $(me).val("重新发送(" + countdown + ")");
                                countdown--;
                            }
                            setTimeout(settime,1000);
                        }
                        settime();
                    }
                    else {
                        $(me).parent('.code').siblings('.error').html("验证码发送失败，请重新发送");
                    }
                },
                error:function () {
                    $(me).parent('.code').siblings('.error').html("系统错误");
                }
            });
        }
    }
    $(".send").click(function () {
        send(this);
    })
})