<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>主页</title>
        <jsp:include page="inc.jsp"></jsp:include>
		<style>
			.scrollTop{position:fixed;right:100px;bottom:100px;width:100px;height:100px;cursor:pointer;display:none;}
		</style>
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
							<img src="<%=basePath%>/assets/img/mr.jpg" alt="photo" class="login-Photo"/>
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
									<a href="<%=basePath%>">退出</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="nav-wrap">
				<ul class="nav" id="nav">
					<li class="navOn">
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
			<div class="header-bottom-wrap">
				<div class="header-bottom clearfix">
					<div class="Album">
						<div class="Album-left" id="Album-left">
							<ul class="album-list">
								<li style="display: block">
									<a href=""><img src="<%=basePath%>/assets/img/s-banner1.jpg" alt="图1"></a>
								</li>
								<li>
									<a href=""><img src="<%=basePath%>/assets/img/s-banner2.jpg" alt="图2"></a>
								</li>
								<li>
									<a href=""><img src="<%=basePath%>/assets/img/s-banner3.jpg" alt="图3"></a>
								</li>
								<li>
									<a href=""><img src="<%=basePath%>/assets/img/s-banner4.jpg" alt="图4"></a>
								</li>
								<li>
									<a href=""><img src="<%=basePath%>/assets/img/s-banner5.jpg" alt="图5"></a>
								</li>
							</ul>
						</div>
						<div class="Album-right" id="Album-right">
							<ul class="list-wrap">
								<i class="icon-top"></i>
								<li><img src="<%=basePath%>/assets/img/s-b1.jpg" alt="图1"></li>
								<li><img src="<%=basePath%>/assets/img/s-b2.jpg" alt="图2"></li>
								<li><img src="<%=basePath%>/assets/img/s-b3.jpg" alt="图3"></li>
								<li><img src="<%=basePath%>/assets/img/s-b4.jpg" alt="图4"></li>
								<li><img src="<%=basePath%>/assets/img/s-b5.jpg" alt="图5"></li>
								<div class="hover-bg" id="hover-bg"><img src="<%=basePath%>/assets/img/hover_bg.png" alt="图片边框"></div>
								<i class="icon-bottom"></i>
							</ul>
						</div>
					</div>
					<div class="Diary">
						<img src="<%=basePath%>/assets/img/one.jpg" alt="黑板">
						<p>一些很期待的生活，总是在那些自以为是的梦想里，忘却、消磨。</p>
					</div>
				</div>
			</div>
			<div class="main-wrap clearfix">
				<div class="main-left main-left-fadeinL">
					<h1 class="h1">文章推荐</h1>
					<div class="Article-wrap">
						<article class=" clearfix">
							<a href="<%=basePath%>/view/articleDetail.jsp">
								<div class="article-bg">
									<img src="<%=basePath%>/assets/img/1-1504022119110-L.jpg" alt="文章图片">
								</div>
								<div class="article-content">
									<header>
										<h3>文章标题</h3>
									</header>
									<p class="p-bottom">己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
									</p>
									<p class="article-footer clearfix"><span>分类:<a href="#">学无止境</a></span><span>发布时间：<time>2017-03-24 13:15:11</time></span></p>
								</div>
							</a>
						</article>
						<article class=" clearfix">
							<a href="<%=basePath%>/view/articleDetail.jsp">
								<div class="article-bg">
									<img src="<%=basePath%>/assets/img/1-1504022119110-L.jpg" alt="文章图片">
								</div>
								<div class="article-content">
									<header>
										<h3>文章标题</h3>
									</header>
									<p class="p-bottom">己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
									</p>
									<p class="article-footer clearfix"><span>分类:<a href="#">学无止境</a></span><span>发布时间：<time>2017-03-24 13:15:11</time></span></p>
								</div>
							</a>
						</article>
						<article class=" clearfix">
							<a href="<%=basePath%>/view/articleDetail.jsp">
								<div class="article-bg">
									<img src="<%=basePath%>/assets/img/1-1504022119110-L.jpg" alt="文章图片">
								</div>
								<div class="article-content">
									<header>
										<h3>文章标题</h3>
									</header>
									<p class="p-bottom">己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
									</p>
									<p class="article-footer clearfix"><span>分类:<a href="#">学无止境</a></span><span>发布时间：<time>2017-03-24 13:15:11</time></span></p>
								</div>
							</a>
						</article>
						<article class=" clearfix">
							<a href="<%=basePath%>/view/articleDetail.jsp">
								<div class="article-bg">
									<img src="<%=basePath%>/assets/img/1-1504022119110-L.jpg" alt="文章图片">
								</div>
								<div class="article-content">
									<header>
										<h3>文章标题</h3>
									</header>
									<p class="p-bottom">己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
									</p>
									<p class="article-footer clearfix"><span>分类:<a href="#">学无止境</a></span><span>发布时间：<time>2017-03-24 13:15:11</time></span></p>
								</div>
							</a>
						</article>
						<article class=" clearfix">
							<a href="<%=basePath%>/view/articleDetail.jsp">
								<div class="article-bg">
									<img src="<%=basePath%>/assets/img/1-1504022119110-L.jpg" alt="文章图片">
								</div>
								<div class="article-content">
									<header>
										<h3>文章标题</h3>
									</header>
									<p class="p-bottom">己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
									</p>
									<p class="article-footer clearfix"><span>分类:<a href="#">学无止境</a></span><span>发布时间：<time>2017-03-24 13:15:11</time></span></p>
								</div>
							</a>
						</article>
						<article class=" clearfix">
							<a href="<%=basePath%>/view/articleDetail.jsp">
								<div class="article-bg">
									<img src="<%=basePath%>/assets/img/1-1504022119110-L.jpg" alt="文章图片">
								</div>
								<div class="article-content">
									<header>
										<h3>文章标题</h3>
									</header>
									<p class="p-bottom">己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
									</p>
									<p class="article-footer clearfix"><span>分类:<a href="#">学无止境</a></span><span>发布时间：<time>2017-03-24 13:15:11</time></span></p>
								</div>
							</a>
						</article>
					</div>
				</div>
				<div class="main-right main-left-fadeinR">
					<div class="common search">
						<h1 class="h1">站内搜索</h1>
						<div class="searchInput">
							<input type="text" placeholder="请输入你需要的内容">
							<i></i>
						</div>
					</div>
					<div class="common sortLinks">
						<h1 class="h1">文章分类</h1>
						<ul class="clearfix">
							<li style="background: #666666;">
								<a href="<%=basePath%>/view/Article.jsp">学无止境</a>
							</li>
							<li style="background: #00CCCC;">
								<a href="<%=basePath%>/view/Article.jsp">奇思妙想</a>
							</li>
							<li style="background: #CC9966;">
								<a href="<%=basePath%>/view/Article.jsp">人文科技</a>
							</li>
							<li style="background: #6633CC;">
								<a href="<%=basePath%>/view/Article.jsp">人物</a>
							</li>
						</ul>
					</div>
					<div class="common about">
						<h1 class="h1">关于博主</h1>
						<img src="<%=basePath%>/assets/img/jie.jpg" alt="博主照片">
						<p>博主：张少杰</p>
						<p>职业：小学生</p>
						<p>个人简介：我是小学生，我爱在上课的时候睡觉。</p>
					</div>
					<div class="common Article">
						<h1 class="h1">文章排行</h1>
						<ul class="Article-list" id="Article-list">
							<li>
								<a href="<%=basePath%>/view/articleDetail.jsp">文章标题</a>
							</li>
							<li>
								<a href="<%=basePath%>/view/articleDetail.jsp">文章标题</a>
							</li>
							<li>
								<a href="<%=basePath%>/view/articleDetail.jsp">文章标题</a>
							</li>
							<li>
								<a href="<%=basePath%>/view/articleDetail.jsp">文章标题</a>
							</li>
							<li>
								<a href="<%=basePath%>/view/articleDetail.jsp">文章标题</a>
							</li>
							<li>
								<a href="<%=basePath%>/view/articleDetail.jsp">文章标题</a>
							</li>
						</ul>
						<ol class="number">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>6</li>
						</ol>
					</div>
					<div class="common visitor">
						<h1 class="h1">最近访客</h1>
						<ul class="clearfix">
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
							<li class="clearfix"><img src="<%=basePath%>/assets/img/photo.jpg" /></li>
						</ul>
					</div>

				</div>
			</div>
		</main>
		<footer>
			<p>©2017 Design by Gao</p>
		</footer>
		<div class="scrollTop" style="z-index: 9999; display: block;"><img src="<%=basePath%>/assets/img/indexIcon-4.png"></div>
		<canvas id="canvas" style="height: 1000px;"></canvas>
		<!--<script>
			var bodyHeight = $('body').height();
			$('canvas').height(bodyHeight);
		</script>-->
		<script src="<%=basePath%>/assets/js/canvas.js"></script>
		<script>
            //返回头部按钮事件
            $('.scrollTop').on('click', function() {
                $("html,body").animate({scrollTop:0}, 500);
            });

            $(window).on('scroll',function () {
                console.log($(this).scrollTop)
                if($(this).scrollTop > 200){
                    $('.scrollTop').show();
                }else{
                    $('.scrollTop').hide();
                }
            })
			//相册幻灯片
			//设置定时器
			timer = setInterval(function() {
				var top = $("#hover-bg").position().top;
				if(top >= 240) {
					$("#hover-bg").css("top", "0px");
				} else {
					$("#hover-bg").css("top", top + 60 + 'px');
				}
				var hoverTop = Math.floor(top / 60 + 1);
				if($("#Album-left li").length == hoverTop) {
					hoverTop = 0;
				}
				if($("#Album-left li:eq(" + hoverTop + ")").css("display"), "none") {
					$("#Album-left li").css("display", "none");
					$("#Album-left li:eq(" + hoverTop + ")").css("display", "block");
				}
			}, 2000);
			//hover
			$("#Album-right li").mouseover(function() {
				//移入关闭定时器
				clearInterval(timer);
				//获取索引并向下取整
				var index = ($(this).index() - 1);
				if(index > 4) {
					index = ($(this).index() - 1) % 5;
					var top = (Math.floor(index) * 60) + "px";
					$("#hover-bg").css("top", top);
				} else {
					index = ($(this).index() - 1);
					var top = (Math.floor(index) * 60) + "px";
					$("#hover-bg").css("top", top);
				}
				index = ($(this).index() - 1);
				if($("#Album-left li:eq(" + index + ")").css("display"), "none") {
					$("#Album-left li").css("display", "none");
					$("#Album-left li:eq(" + index + ")").css("display", "block");
				}
			})
			$("#hover-bg").mouseover(function() {
				clearInterval(timer);
			})
			//移出开启定时器
			$("#Album-right li,#hover-bg").mouseleave(function() {
				timer = setInterval(function() {
					var top = $("#hover-bg").position().top;
					if(top >= 240) {
						$("#hover-bg").css("top", "0px");
					} else {
						$("#hover-bg").css("top", top + 60 + 'px');
					}
					var hoverTop = Math.floor(top / 60 + 1);
					if($("#Album-left li").length == hoverTop) {
						hoverTop = 0;
					}
					if($("#Album-left li:eq(" + hoverTop + ")").css("display"), "none") {
						$("#Album-left li").css("display", "none");
						$("#Album-left li:eq(" + hoverTop + ")").css("display", "block");
					}
				}, 2000);
			});
		</script>
	</body>

</html>