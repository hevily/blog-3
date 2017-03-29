/**
 * Created by Administrator on 2017/3/21.
 */
$(function () {
    //相册幻灯片
       //设置定时器
        timer=setInterval(function () {
            var top=$("#hover-bg").position().top;
            if(top>=240)
            {
                $("#hover-bg").css("top","0px");
            }
            else
            {
                $("#hover-bg").css("top",top+60+'px');
            }
            var hoverTop=Math.floor(top/60+1);
            if ($("#Album-left li").length==hoverTop)
            {
                hoverTop=0;
            }
            if($("#Album-left li:eq("+hoverTop+")").css("display"),"none")
            {
                $("#Album-left li").css("display","none");
                $("#Album-left li:eq("+hoverTop+")").css("display","block");
            }
        },2000);
    //hover
        $("#Album-right li").mouseover(function () {
            //移入关闭定时器
            clearInterval(timer);
            //获取索引并向下取整
            var index=($(this).index()-1);
            if(index>4)
            {
                index=($(this).index()-1)%5;
                var top=(Math.floor(index)*60)+"px";
                $("#hover-bg").css("top",top);
            }
            else {
                index=($(this).index()-1);
                var top=(Math.floor(index)*60)+"px";
                $("#hover-bg").css("top",top);
            }
            index=($(this).index()-1);
            if($("#Album-left li:eq("+index+")").css("display"),"none")
            {
                $("#Album-left li").css("display","none");
                $("#Album-left li:eq("+index+")").css("display","block");
            }
        })
        $("#hover-bg").mouseover(function () {
            clearInterval(timer);
        })
        //移出开启定时器
        $("#Album-right li,#hover-bg").mouseleave(function () {
            timer=setInterval(function () {
                var top=$("#hover-bg").position().top;
                if(top>=240)
                {
                    $("#hover-bg").css("top","0px");
                }
                else
                {
                    $("#hover-bg").css("top",top+60+'px');
                }
                var hoverTop=Math.floor(top/60+1);
                if ($("#Album-left li").length==hoverTop)
                {
                    hoverTop=0;
                }
                if($("#Album-left li:eq("+hoverTop+")").css("display"),"none")
                {
                    $("#Album-left li").css("display","none");
                    $("#Album-left li:eq("+hoverTop+")").css("display","block");
                }
            },2000);
        });
})