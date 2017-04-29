<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>登录</title>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/public/css/mui.min.css" />
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/public/css/page.css" />
		<link rel="stylesheet" href="<%=basePath%>/assets/css/main.css">
		<script src="<%=basePath%>/public/js/jquery-3.2.0.min.js"></script>
		<script src="<%=basePath%>/public/js/page.js"></script>
		<script src="<%=basePath%>/assets/js/main.js"></script>
	</head>

	<body>
		<main class="index-main-body" style="min-width: auto;">
			<div class="index-header">
				<h1 class="logo">BLOG</h1>
				<h2 class="subtitle">发现更大的世界</h2>
			</div>
			<div>
				<div class="index-tab-navs">
					<div class="navs-slider">
						<a href="javascript:void(0)" id="signup" class="">注册</a>
						<a href="javascript:void(0)" id="signin" class="active">登录</a>
						<span class="navs-slider-bar"></span>
					</div>
				</div>
				<!--//login-->
				<div class="login-wrap">
					<div class="view-signin">
						<input type="text" aria-label="手机号" placeholder="手机号" required="">
						<input type="password" aria-label="密码" placeholder="密码" required="">
						<a href="index.html"><button class="sign-button" type="submit">登录</button></a>
						<div class="clearfix">
							<a class="login-Toggle" href="javascript:void(0)" id="pswdLogin">手机验证码登录</a>
						</div>
					</div>
				    <!--codeLogin-->
					<div class="view-forgetPwd" style="display: none;">
						<input type="text" class="account" aria-label="手机号" placeholder="手机号">
						<div class="code">
							<input type="text" aria-label="验证码" placeholder="验证码">
							<input class="send" value="发送验证码">
						</div>
						<a href="index.html"><button class="sign-button" type="submit">登录</button></a>
						<div class="clearfix">
							<a class="login-Toggle" href="javascript:void(0)" id="mobileLogin">密码登录</a>
						</div>
					</div>
				</div>
				<!--//register-->
				<div class="view-signup" style="display: none;">
					<input type="text" aria-label="姓名" placeholder="姓名">
					<input type="text" class="account" aria-label="手机号" placeholder="手机号">
					<input type="password" aria-label="密码" placeholder="密码（不少于 6 位）">
					<div class="code">
						<input type="text" aria-label="验证码" placeholder="验证码">
						<input class="send" value="发送验证码">
					</div>
					<button class="sign-button" type="submit">进入博客</button>
				</div>
			</div>
		</main>
		<footer>
			<p>©2017 Design by Gao</p>
		</footer>
		<canvas id="canvas"></canvas>
		<script src="<%=basePath%>/assets/js/canvas.js"></script>
		<script>
			var bodyHeight = $(window).height();
			var footerHieght=$("footer").height();
			var bodyMinHeight=bodyHeight-footerHieght;
			$("main").css('min-height',bodyMinHeight);
			$('canvas').height(bodyHeight);
			$("#signin").click(function() {
				$(".navs-slider a").removeClass('active');
				$(this).addClass('active');
				$('.navs-slider-bar').css('left', '4.5rem');
				$('.view-signup').css('display', 'none');
				$('.login-wrap').css('display', 'block');
			})
			$("#signup").click(function() {
				$(".navs-slider a").removeClass('active');
				$(this).addClass('active');
				$('.navs-slider-bar').css('left', '0');
				$('.login-wrap').css('display', 'none');
				$('.view-signup').css('display', 'block');
			})
		</script>
	</body>

</html>