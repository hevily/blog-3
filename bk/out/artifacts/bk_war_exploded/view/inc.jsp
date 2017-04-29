<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path;
%>
<html>
<head>
    <title>icn</title>
    <link rel="stylesheet" type="text/css" href="<%=basePath%>/public/css/mui.min.css" />
    <link rel="stylesheet" type="text/css" href="<%=basePath%>/public/css/page.css" />
    <link rel="stylesheet" href="<%=basePath%>/assets/css/main.css">
    <script src="<%=basePath%>/public/js/jquery-3.2.0.min.js"></script>
    <script src="<%=basePath%>/public/js/page.js"></script>
    <script src="<%=basePath%>/assets/js/main.js"></script>
</head>
<body>

</body>
</html>
