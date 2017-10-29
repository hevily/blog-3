<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>个人中心</title>
		<jsp:include page="view/inc.jsp"></jsp:include>
		<script src="<%=basePath%>/myInfo.js"></script>
	</head>

	<body>
		<header class="top-header">
			<div class="header-top-wrap">
				<div class="header-top">
					<img src="<%=basePath%>/assets/img/banner_top.jpg" alt="banner">
					<div class="banner-words">
						<p class="a-fadeinL page1_1">我们不停的翻弄着回忆</p>
						<p class="a-fadeinL page1_2">却再也找不回那时的自己</p>
						<p class="fadeIn page1_3">红尘一梦，不再追寻</p>
					</div>
					<div class="loginIn">
						<div class="loginImg">
							<img src="<%=basePath%>/assets/img/mr.jpg" alt="photo" class="login-Photo" />
						</div>
						<div class="loginList">
							<ul>
								<li class="loginName">寻找火星人</li>
								<li class="personInfo">
									<a href="<%=basePath%>/myInfo.jsp">个人中心</a>
								</li>
								<li class="changePwd">
									<a href="<%=basePath%>/myInfo.jsp">修改密码</a>
								</li>
								<li class="exit">
									<a href="<%=basePath%>/login.jsp">退出</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="nav-wrap">
				<ul class="nav" id="nav">
					<li>
						<a href="<%=basePath%>/view/index.jsp">首页</a>
					</li>
					<li>
						<a href="<%=basePath%>/view/Article.jsp">博文</a>
					</li>
					<li>
						<a href="<%=basePath%>/view/Album.jsp">相册</a>
					</li>
					<li>
						<a href="<%=basePath%>/view/Diary.jsp">日记</a>
					</li>
					<li>
						<a href="<%=basePath%>/view/Guestbook.jsp">留言板</a>
					</li>
					<li>
						<a href="<%=basePath%>/view/about.jsp">关于我</a>
					</li>
				</ul>
			</div>
		</header>
		<main class="clearfix">
			<div class="main-wrap clearfix">
				<div class="location">
					<span class="mui-icon mui-icon-location">您当前的位置：</span>
					<a href="<%=basePath%>/view/index.jsp">首页</a><span>></span><span class="italic">个人中心</span>
				</div>
			</div>
			<div class="info-wrap clearfix">
				<div class="info-left">
					<p class="info-selected">个人资料</p>
					<p>修改密码</p>
					<p>忘记密码</p>
				</div>
				<div class="info-right">
					<div class="person-Info info-common-wrap">
						<div class="info-img">
							<img src="<%=basePath%>/assets/img/photo.jpg" alt="头像" class="login-Photo" />
							<span>修改头像</span>
						</div>
						<div class="info-common clearfix"><span>账号：</span><span id="mobile1"></span></div>
						<div class="info-common clearfix"><span>昵称：</span><input type="text" id="nickName"></div>
						<div class="info-common clearfix"><span>个性签名：</span><textarea name="" value="山有木兮木有枝"></textarea></div>
					    <button class="sign-button" type="submit">确认修改</button>
					</div>
					<div class="modify-password info-common-wrap" style="display: none;">
						<div class="info-common clearfix"><span>当前账号</span><input type="text"  disabled style="background: #F3F6F1;" id="mobile2"></div>
						<div class="info-common clearfix"><span>当前密码</span><input type="text" value="" id="oldPwd"></div>
						<div class="info-common clearfix"><span>新密码</span><input type="text" value="" id="newPwd"></div>
						<div class="info-common clearfix"><span>确认密码</span><input type="text" value="" id="confirmPsd"></div>
						<p class="error" id="confirmError"></p>
						<button class="sign-button" type="submit" id="pwdChanged">确认修改</button>
					</div>
					<div class="find-password info-common-wrap" style="display: none;">
						<input type="text" class="account" aria-label="手机号" placeholder="手机号" id="codeMobile">
						<div class="code">
							<input type="text" aria-label="验证码" placeholder="验证码" id="code">
							<input class="send" value="发送验证码">
						</div>
						<input type="password" class="account" aria-label="新密码" placeholder="新密码" id="newPsd">
						<p class="error" id="codeConfirmError"></p>
						<button class="sign-button" type="submit" id="codePsdChanged">确认修改</button>
					</div>
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
			var headerHeight=$("header").height();
			var bodyMinHeight=bodyHeight-footerHieght-headerHeight;
			$("main").css('min-height',bodyMinHeight);
			$('canvas').height(bodyHeight);
			
			$('.info-left p').click(function  () {
				$('.info-left p').removeClass('info-selected');
				$(this).addClass('info-selected');
				var index=$(this).index();
				$(".info-common-wrap").css('display','none');
//				alert(index)
				$(".info-common-wrap").eq(index).css('display','block')
			})
		</script>
	</body>

</html>