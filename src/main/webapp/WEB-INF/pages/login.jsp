<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>

<!--------------------
LOGIN FORM
by: Amit Jakhu
www.amitjakhu.com
--------------------->

<!--META-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CDO Data Portal</title>
    <link rel="icon" href="http://codesprogram.com/files/icon/cp_icon.png" />

<!--STYLESHEETS-->
<link rel="stylesheet" href="<c:url value="/resources/theme1/css_login/style.css" />">

<!--SCRIPTS-->
<script type="text/javascript" src="<c:url value="/resources/theme1/js/jquery.min.login.js"/>"></script>
<!--Slider-in icons-->
<script type="text/javascript">
$(document).ready(function() {
	$(".username").focus(function() {
		$(".user-icon").css("left","-48px");
	});
	$(".username").blur(function() {
		$(".user-icon").css("left","0px");
	});
	
	$(".password").focus(function() {
		$(".pass-icon").css("left","-48px");
	});
	$(".password").blur(function() {
		$(".pass-icon").css("left","0px");
	});
});
</script>

</head>
<body>

<!--WRAPPER-->
<div id="wrapper">

	<!--SLIDE-IN ICONS-->
    <div class="user-icon"></div>
    <div class="pass-icon"></div>
    <!--END SLIDE-IN ICONS-->

<!--LOGIN FORM-->
<form name="login-form" class="login-form" action="login" method="post">

	<!--HEADER-->
    <div class="header">
    <!--TITLE--><h1>CDO Data Correction Portal</h1><!--END TITLE-->
    <!--DESCRIPTION--><span>Fill out the form below to login to CDO Data pannel.</span><!--END DESCRIPTION-->
    </div>
    <!--END HEADER-->
	
	<!--CONTENT-->
    <div class="content">
	<!--USERNAME--><input name="username" type="text" class="input username" value="Username" onfocus="this.value=''" /><!--END USERNAME-->
	 
    <!--PASSWORD--><input name="password" type="password" class="input password" value="Password" onfocus="this.value=''" /><!--END PASSWORD-->
    
    <c:if test="${SPRING_SECURITY_LAST_EXCEPTION.message == 'No AuthenticationProvider found for org.springframework.security.authentication.UsernamePasswordAuthenticationToken'}">

				<div style="color: red">${error} Wrong Validation or Not Authorized</div>
				</c:if>
    
    <c:if test="${SPRING_SECURITY_LAST_EXCEPTION.message == 'Maximum sessions of 1 for this principal exceeded'}">
				<div style="color: red">${error} You already have an active session, please logout from the pervious session</div>
				</c:if>
    </div>
    <!--END CONTENT-->
    
    <!--FOOTER-->
    <div class="footer">
    <!--LOGIN BUTTON--><input type="submit" name="submit" value="Login" class="button" /><!--END LOGIN BUTTON-->
    <!--REGISTER BUTTON--><%--input type="submit" name="submit" value="Register" class="register" />--%>
    </div>
    <!--END FOOTER-->

</form>
<!--END LOGIN FORM-->

</div>
<!--END WRAPPER-->

<!--GRADIENT--><div class="gradient"></div><!--END GRADIENT-->

</body>
</html>