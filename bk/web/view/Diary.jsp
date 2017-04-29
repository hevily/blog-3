<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>日记</title>
		<jsp:include page="inc.jsp"></jsp:include>
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
						<img src="<%=basePath%>/assets/img/mr.jpg" alt="photo"/>
					</div>
					<div class="loginList">
						<ul>
							<li class="loginName">寻找火星人</li>
							<li class="personInfo"><a href="<%=basePath%>/view/myInfo.jsp">个人中心</a></li>
							<li class="changePwd"><a href="<%=basePath%>/view/myInfo.jsp">修改密码</a></li>
							<li class="exit"><a href="<%=basePath%>/view/login.jsp">退出</a></li>
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
					<li class="navOn">
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
				<span class="mui-icon mui-icon-location">您当前的位置：</span><a href="<%=basePath%>/view/index.jsp">首页</a><span>></span><span>日记</span>
			</div>
			</div>
		</main>
		<footer>
			<p>©2017 Design by Gao</p>
		</footer>
		<canvas id="canvas" style="height: 1000px;"></canvas>
		<!--<script>
			var bodyHeight = $('body').height();
			$('canvas').height(bodyHeight);
		</script>-->
		<script src="<%=basePath%>/assets/js/canvas.js"></script>
	</body>

</html>