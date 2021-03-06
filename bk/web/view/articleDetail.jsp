<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>关于我</title>
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
							<img src="<%=basePath%>/assets/img/mr.jpg" alt="photo" />
						</div>
						<div class="loginList">
							<ul>
								<li class="loginName">寻找火星人</li>
								<li class="personInfo">
									<a href="<%=basePath%>/view/myInfo.jsp">个人中心</a>
								</li>
								<li class="changePwd">
									<a href="<%=basePath%>/view/myInfo.jsp">修改密码</a>
								</li>
								<li class="exit">
									<a href="<%=basePath%>/view/login.jsp">退出</a>
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
					<li class="navOn">
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
					<a href="<%=basePath%>/view/index.jsp">首页</a><i>></i>
					<a href="<%=basePath%>/view/Article.jsp">博文</a><i>></i><span>文章详情</span>
				</div>
			</div>
			<div class="article-Detail-wrap">
				<div class="article-Detail">
					<h1>文章标题</h1>
					<div class="articleDetail-top"><span>编辑时间：2017-4-27<i></i></span><span>文章分类：<i>学无止境</i></span><span>阅读：<i></i></span></div>
					<div class="articleDetail-content">
						己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
					</div>
				</div>
			</div>
			<div class="comment-wrap">
				<div class="make-comment">
					<img src="<%=basePath%>/assets/img/photo.jpg" class="make-comment-left">
					<div class="make-comment-right">
						<textarea name="" placeholder="说点什么吧" class="comment-text"></textarea>
						<button class="comment-btn" disabled>评论</button>
					</div>
				</div>
				<ul class="comment-list">
					<li>
						<img src="<%=basePath%>/assets/img/photo.jpg" class="commentItem-left">
						<div class="commentItem-right">
							<p class="comment-name">名字呢</p>
							<p class="comment-content">这可能是个假评论...</p>
							<p class="comment-bottom"><span class="comment-createTime">2017-4-28 16:39</span><span class="mui-icon mui-icon-undo reply-btn">回复</span></p>
						</div>
						<div class="Reply">
							<img src="<%=basePath%>/assets/img/photo.jpg" class="make-comment-left">
							<div class="make-comment-right clearfix">
								<textarea name="" placeholder="说点什么吧" class="comment-text"></textarea>
								<button class="comment-cancle">取消</button>
								<button class="comment-btn" disabled>评论</button>
							</div>
						</div>
					</li>
					<li>
						<img src="<%=basePath%>/assets/img/photo.jpg" class="commentItem-left">
						<div class="commentItem-right">
							<p class="comment-name">名字呢</p>
							<p class="comment-content">这可能是个假评论...</p>
							<p class="comment-bottom"><span class="comment-createTime">2017-4-28 16:39</span><span class="mui-icon mui-icon-undo reply-btn">回复</span></p>
						</div>
						<div class="Reply">
							<img src="<%=basePath%>/assets/img/photo.jpg" class="make-comment-left">
							<div class="make-comment-right clearfix">
								<textarea name="" placeholder="说点什么吧" class="comment-text"></textarea>
								<button class="comment-cancle">取消</button>
								<button class="comment-btn" disabled>评论</button>
							</div>
						</div>
					</li>
				</ul>
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
		<script type="text/javascript">
			//监听评论内容变化
			$('.comment-text').on('input propertychange', function() {
				if($.trim($(this).val()) != '') {
					$(this).siblings('.comment-btn').attr('disabled', false);
				} else {
					$(this).siblings('.comment-btn').attr('disabled', true);
				}
			})
			//评论回复
			$('.reply-btn').click(function  () {
				$('.Reply').css('display','none');
				$(this).parent('p').parent('div').siblings('.Reply').fadeIn();
			})
			//取消
			$('.comment-cancle').click(function  () {
				$(this).parent().parent('.Reply').fadeOut();
			})
		</script>
		<style type="text/css">
			.comment-list li{margin: 20px 0;}
			.commentItem-right {margin-left: 80px;}
			.comment-name {line-height: 30px;color: #333;font-weight: 700;}
			.comment-content {line-height: 30px;color: #333;margin: 10px 0;}
			.comment-bottom {color: #808080;font-size: 17px;}
			.mui-icon-undo {margin-left: 30px;font-size: 17px;cursor: pointer;}
			.mui-icon-undo:before {font-size: 25px;margin-right: 5px;}
			.Reply{margin: 15px 0 20px 80px;display: none;}
			.Reply button{float: right;margin: 0 10px;}
		</style>
	</body>

</html>