/**
 * Created by Administrator on 2017/3/21.
 */
$(function () {
        //article，hover
        $('article').mouseover(function  () {
        	$('article h3').removeClass('articleHover');
        	$(this).find('h3').addClass('articleHover');
        })
        //loginIn
        $(".loginImg").click(function(){
        	$(".loginList").fadeToggle();
        })
        //验证码按钮
    function send(me) {
//      var reg=/^1[34578]\d{9}$/;
//      var mobile = $(me).parent().parent().find("input:eq(0)").val();
//      if(mobile==""||mobile=="null")
//      {
//          $(".error").html("手机号不能为空");
//      }
//      else if(!reg.test(mobile)){
//          $(".error").html("请输入正确的手机号码");
//      }
//      else {
//          $(".error").html("");
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
//  }

    $(".send").click(function () {
        send(this);
    })
})