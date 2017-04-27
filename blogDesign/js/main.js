/**
 * Created by Administrator on 2017/3/21.
 */
$(function () {
	   //mainHeight
	   var windowHeight=$(window).height();
	   var headrHeight=$('header').height();
	   var navHeight=$('.nav').height();
	   var minHeight=windowHeight-headrHeight-navHeight;
	   $("main").css('min-height',minHeight);
        //article，hover
        $('article').mouseover(function  () {
        	$('article h3').removeClass('articleHover');
        	$(this).find('h3').addClass('articleHover');
        })
        //loginIn
        $(".loginImg").click(function(){
        	$(".loginList").fadeToggle();
        })
        //loginToggle
        $("#pswdLogin").click(function  () {
        	$(".view-signin").css('display','none');
        	$(".view-forgetPwd").css('display','block');
        })
        $("#mobileLogin").click(function  () {
        	$(".view-signin").css('display','block');
        	$(".view-forgetPwd").css('display','none');
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
    
    //canavs
    //定义画布宽高和生成点的个数
			var WIDTH = window.innerWidth,
				HEIGHT = window.innerHeight,
				POINT = 35;

			var canvas = document.getElementById('canvas');
			canvas.width = WIDTH,
				canvas.height = HEIGHT;
			var context = canvas.getContext('2d');
			context.strokeStyle = 'rgba(0,0,0,0.02)',
				context.strokeWidth = 1,
				context.fillStyle = 'rgba(0,0,0,0.05)';
			var circleArr = [];

			//线条：开始xy坐标，结束xy坐标，线条透明度
			function Line(x, y, _x, _y, o) {
				this.beginX = x,
					this.beginY = y,
					this.closeX = _x,
					this.closeY = _y,
					this.o = o;
			}
			//点：圆心xy坐标，半径，每帧移动xy的距离
			function Circle(x, y, r, moveX, moveY) {
				this.x = x,
					this.y = y,
					this.r = r,
					this.moveX = moveX,
					this.moveY = moveY;
			}
			//生成max和min之间的随机数
			function num(max, _min) {
				var min = arguments[1] || 0;
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
			// 绘制原点
			function drawCricle(cxt, x, y, r, moveX, moveY) {
				var circle = new Circle(x, y, r, moveX, moveY)
				cxt.beginPath()
				cxt.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI)
				cxt.closePath()
				cxt.fill();
				return circle;
			}
			//绘制线条
			function drawLine(cxt, x, y, _x, _y, o) {
				var line = new Line(x, y, _x, _y, o)
				cxt.beginPath()
				cxt.strokeStyle = 'rgba(0,0,0,' + o + ')'
				cxt.moveTo(line.beginX, line.beginY)
				cxt.lineTo(line.closeX, line.closeY)
				cxt.closePath()
				cxt.stroke();

			}
			//初始化生成原点
			function init() {
				circleArr = [];
				for(var i = 0; i < POINT; i++) {
					circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10) / 40, num(10, -10) / 40));
				}
				draw();
			}

			//每帧绘制
			function draw() {
				context.clearRect(0, 0, canvas.width, canvas.height);
				for(var i = 0; i < POINT; i++) {
					drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
				}
				for(var i = 0; i < POINT; i++) {
					for(var j = 0; j < POINT; j++) {
						if(i + j < POINT) {
							var A = Math.abs(circleArr[i + j].x - circleArr[i].x),
								B = Math.abs(circleArr[i + j].y - circleArr[i].y);
							var lineLength = Math.sqrt(A * A + B * B);
							var C = 1 / lineLength * 7 - 0.009;
							var lineOpacity = C > 0.03 ? 0.03 : C;
							if(lineOpacity > 0) {
								drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i + j].x, circleArr[i + j].y, lineOpacity);
							}
						}
					}
				}
			}

			//调用执行
			window.onload = function() {
				init();
				setInterval(function() {
					for(var i = 0; i < POINT; i++) {
						var cir = circleArr[i];
						cir.x += cir.moveX;
						cir.y += cir.moveY;
						if(cir.x > WIDTH) cir.x = 0;
						else if(cir.x < 0) cir.x = WIDTH;
						if(cir.y > HEIGHT) cir.y = 0;
						else if(cir.y < 0) cir.y = HEIGHT;

					}
					draw();
				}, 16);
			}
})