/**
 * Created by Administrator on 2017/4/29.
 */
$(function () {
  //注册
    $("#registerBtn").on('click',function () {
        if($("#nickName").val()=='')
        {
            $(this).parent('a').siblings('.error').html("请输入昵称");
        }
        else if($("#regMobile").val()==''){
            $(this).parent('a').siblings('.error').html("请输入手机号");
        }
        else if($("#regPsd").val()==''){
            $(this).parent('a').siblings('.error').html("请输入密码");
        }
        else if($.trim($("#regPsd").val()).length<'6'){
            $(this).parent('a').siblings('.error').html("密码不能小于六位");
        }
        else if($("#regCode").val()==''){
            $(this).parent('a').siblings('.error').html("请输入验证码");
        }
        else {
            $(this).parent('a').siblings('.error').html("");
            $.ajax({
                type:"post",
                url:"users?action=register",
                data:{
                    "userName":$("#regMobile").val(),
                    "password":$("#regPsd").val(),
                    "authCode":$("#regCode").val()
                },
                dataType:"json",
                success:function (msgString) {
                    if(msgString.code=='200')
                    {
                        alert('注册成功');
                        window.location.href='/view/index.jsp';
                    }
                    else {
                        alert(msgString.msg);
                        $("#registerBtn").parent('a').siblings('.error').html(msgString.msg);
                    }
                },
                error:function (msgString) {
                    alert("系统异常"+msgString.msg);
                    $("#registerBtn").parent('a').siblings('.error').html(msgString.msg);
                }
            })
        }
    })
 // 验证码登录
    $("#codeLogin").on("click",function () {
        if($("#loginCode").val()=="")
        {
            $(this).parent('a').siblings('.error').html("请输入验证码");
        }
        else {
            $(this).parent('a').siblings('.error').html("");
            $.ajax({
                type:"post",
                url:"users?action=login",
                data:{
                    "userName":$("#codeMobile").val(),
                    "code":$("#loginCode").val()
                },
                dataType:"json",
                success:function (msgString) {
                    if(msgString.success == '200')
                    {
                        window.location.href='<%=basePath%>/view/index.jsp';
                    }
                    else {
                        $("#codeLogin").parent('a').siblings('.error').html(msgString.msg);
                    }
                }
            })
        }
    });
    // 账号密码登录
    $("#psdLogin").on("click",function () {
        var reg = /^1[34578]\d{9}$/;
        var mobile=$("#psdMobile").val();
        if (mobile == "" || mobile == "null") {
            $(this).parent('a').siblings('.error').html("请输入手机号");
        }
        // else if (!reg.test(mobile)) {
        //     $(this).parent('a').siblings('.error').html("请输入正确的手机号");
        // }
        else if($("#loginPsd").val()=="")
        {
            $(this).parent('a').siblings('.error').html("请输入密码");
        }
        else {
            $(this).parent('a').siblings('.error').html("");
            $.ajax({
                type:"post",
                url:"users?action=login",
                data:{
                    "userName":$("#psdMobile").val(),
                    "password":$("#loginPsd").val()
                },
                dataType:"json",
                success:function (msgString) {
                    // alert("into fun");
                    if(msgString.code == '200')
                    {
                        // alert("into 200"+msgString.msg);
                        window.location.href='/view/index.jsp';
                        console.log(msgString.msg);
                    }
                    else {
                        $("#psdLogin").parent('a').siblings('.error').html(msgString.msg);
                    }
                },
                error:function (msgString) {
                    $("#psdLogin").parent('a').siblings('.error').html(msgString.msg);
                }
            })
        }
    });
    //发送验证码
    function send(me) {
        var reg = /^1[34578]\d{9}$/;
        var mobile=$(me).parent('.code').siblings('.mobile').val();
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