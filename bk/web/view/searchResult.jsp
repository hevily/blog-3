<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>文章</title>
    <jsp:include page="inc.jsp"></jsp:include>
    <script src="<%=basePath%>/view/search.js"></script>
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
                        <li class="personInfo"><a href="<%=basePath%>/myInfo.jsp">个人中心</a></li>
                        <li class="changePwd"><a href="<%=basePath%>/myInfo.jsp">修改密码</a></li>
                        <li class="exit"><a href="<%=basePath%>/login.jsp">退出</a></li>
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
        <div class="main-left main-left-fadeinL">
            <div class="location">
                <p>
                    <span class="mui-icon mui-icon-location"></span>
                    <span>您当前的位置：</span>
                    <a href="<%=basePath%>/view/index.jsp">首页</a><span>></span><span>博文</span><span>></span><span class="italic">站内搜索</span>
                </p>
            </div>
            <div class="sortLinks Article-catagory">
                <li style="background: #666666;">
                    <a href="javascript:void(0)" class="catagory">学无止境</a>
                </li>
                <li style="background: #00CCCC;">
                    <a href="javascript:void(0)" class="catagory">奇思妙想</a>
                </li>
                <li style="background: #CC9966;">
                    <a href="javascript:void(0)" class="catagory">人文科技</a>
                </li>
                <li style="background: #6633CC;">
                    <a href="javascript:void(0)" class="catagory">IT资讯</a>
                </li>
            </div>
            <a class="mui-icon mui-icon-compose add-article" href="<%=basePath%>/view/makeArticle.jsp">发表文章</a>
            <div class="Article-wrap" id="article-wrap">
                <!--<article class=" clearfix">
                    <div class="article-bg">
                        <img src="../img/1-1504022119110-L.jpg" alt="文章图片">
                    </div>
                    <div class="article-content">
                        <header>
                            <h3>文章标题</h3>
                        </header>
                        <p class="p-bottom">己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？” 。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先只有先了解这套流程，我们才能做出自己满意的个人博客。 ”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程是什么？只有先
                        </p>
                        <p class="article-footer clearfix"><span>分类:<a href="#">学无止境</a></span><span>发布时间：<time>2017-03-24 13:15:11</time></span></p>
                    </div>
                </article>-->
            </div>
            <div class="pages" id="pager">

            </div>
        </div>
        <div class="main-right main-left-fadeinR">
            <div class="common search">
                <h1 class="h1">站内搜索</h1>
                <div class="searchInput">
                    <input type="text" placeholder="请输入你需要的内容">
                    <i class="searchIcon"></i>
                </div>
            </div>
            <div class="common Article">
                <h1 class="h1">文章排行</h1>
                <ul class="Article-list" id="Article-list">
                    <%--<li>--%>
                    <%--<a href="#">文章标题</a>--%>
                    <%--</li>--%>
                </ul>
                <ol class="number" id="numbers">
                    <%--<li>1</li>--%>
                </ol>
            </div>
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