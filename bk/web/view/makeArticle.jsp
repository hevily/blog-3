<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<jsp:include page="inc.jsp"></jsp:include>
<script src="<%=basePath%>/view/makeArticle.js"></script>
<html>
<head>
    <title>Title</title>
</head>
<body>
<header class="top-header">
    <div class="header-top-wrap">
        <div class="header-top">
            <img src="../assets/img/banner_top.jpg" alt="banner">
            <div class="banner-words">
                <p class="a-fadeinL page1_1">我们不停的翻弄着回忆</p>
                <p class="a-fadeinL page1_2">却再也找不回那时的自己</p>
                <p class="fadeIn page1_3">红尘一梦，不再追寻</p>
            </div>
            <div class="loginIn">
                <div class="loginImg">
                    <img src="../assets/img/mr.jpg" alt="photo"/>
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
        <div class="location">
            <span class="mui-icon mui-icon-location">您当前的位置：</span><a href="<%=basePath%>/view/index.jsp">首页</a><span>></span><span class="italic">发表文章</span>
        </div>
        <div class="addart clearfix">
            <h3>文章新建</h3>
            <div class="addart-l">
                <div class="art-box">
                    <p>标题</p>
                    <input type="text" name="title" id="title">
                    <p>文章内容</p>
                    <textarea  cols="30" rows="10" id="content"></textarea>
                </div>
            </div>
            <div class="addart-r">
                <section>
                    <h4>分类</h4>
                    <ul>
                        <li>
                            <label><input type="radio" name="type">学无止境</label>
                            <label><input type="radio" name="type">奇思妙想</label>
                            <label><input type="radio" name="type">人文科技</label>
                            <label><input type="radio" name="type">IT资讯</label>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <div>
            <button type="button" id="mark">发表</button>
        </div>
    </div>
</main>
<footer>
    <p>©2017 Design by Gao</p>
</footer>
<canvas id="canvas" style="height: 1000px;"></canvas>
<script src="<%=basePath%>/assets/js/canvas.js"></script>
</body>
</html>
