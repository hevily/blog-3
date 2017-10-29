/**
 * Created by Administrator on 2017/5/2.
 */
$(function () {
    $('#mark').click(function () {
        $.ajax({
            type:"post",
            url:"essay?action=addEssay",
            data:{
                "title":$('#title').val(),
                "content":$('#content').val(),
                "etype":$("input[name='type']:checked").parent('label').text()
            },
            dataType:"json",
            success:function (msgString) {
                if(msgString.code=='200')
                {
                    mui.toast('发表成功！')
                    window.location.href='/view/Article.jsp';
                }
                else {
                    alert('into ajax but fail')
                }
            },
            error:function (msgString) {
                alert('fail to ajax')
            }
        })
    })
})