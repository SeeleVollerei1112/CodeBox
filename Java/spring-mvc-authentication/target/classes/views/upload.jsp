<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head><title>上传文件</title></head>
<body>
<form action="${pageContext.request.contextPath }/user/avatar"
      method="POST" enctype="multipart/form-data">
    <div>${msg}</div>
    用户名：<input type="text" name="username"/><br/>
    头&nbsp;&nbsp;像：
    <input type="file" name="avatar"/><br/>
    <input type="submit" value="提交"/>
</form>
</body>
</html>