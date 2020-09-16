<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="security" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html class="no-js">

<head>
    <!-- Basic Page Needs
        ================================================== -->
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="favicon.ico">
    <title>${initParam.title}</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <!-- Mobile Specific Metas
        ================================================== -->
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Template CSS Files
        ================================================== -->
    <!-- Twitter Bootstrs CSS -->
    <link rel="stylesheet" href="<c:url value="/resources/theme1/plugins/bootstrap/bootstrap.min.css" />">
    <!-- Ionicons Fonts Css -->
    <link rel="stylesheet" href="<c:url value="/resources/theme1/plugins/ionicons/ionicons.min.css" />">
    <!-- animate css -->
    <link rel="stylesheet" href="<c:url value="/resources/theme1/plugins/animate-css/animate.css" />">
    <!-- Hero area slider css-->
    <link rel="stylesheet" href="<c:url value="/resources/theme1/plugins/slider/slider.css" />">
    <!-- owl craousel css -->
    <link rel="stylesheet" href="<c:url value="/resources/theme1/plugins/owl-carousel/owl.carousel.css" />">
    <link rel="stylesheet" href="<c:url value="/resources/theme1/plugins/owl-carousel/owl.theme.css" />">
    <!-- Fancybox -->
    <link rel="stylesheet" href="<c:url value="/resources/theme1/plugins/facncybox/jquery.fancybox.css" />">
    <!-- template main css file -->
    <link rel="stylesheet" href="<c:url value="/resources/theme1/css/style.css" />">
   <style> 
  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    left: 50%;
     margin-left: 55%;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}
.done_image
{
margin-left: 55%;
 content: "";
  clear: both;
  display: table;
}
.column {
  float: left;
  width: 34.33%;
  padding: 1px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
   </style> 
</head>

<body>

    <!--
        ==================================================
        Header Section Start
        ================================================== -->
   <%@ include file = "header.jsp" %>

    <!--
==================================================
Slider Section Start
================================================== -->
<!-- 
<section id="hero-area">
<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">
            <div class="block wow fadeInUp" data-wow-delay=".3s">
              
                <section class="cd-intro">
                    <h1 class="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >
                    <span>Internet Banking Admin Portal</span><br>
                    <span class="cd-words-wrapper">
                        <b class="is-visible">Customer Satisfaction</b>
                        <b>INNOVATION</b>
                        <b>RELABILITY</b>
                    </span>
                    </h1>
                    </section> 
                   
                   
                </div>
            </div>
        </div>
    </div>
</section>
-->

 <section class="global-page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>CDO Data Portal</h2>
                            <ol class="breadcrumb">
                               
                                <li class="active"> Update Customer Information</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<!--
==================================================
About Section Start
================================================== -->
<section id="about">
    <div class="container">
        <!--div class="row">

        <h2 class="subtitle wow fadeInUp animated" data-wow-delay=".3s" data-wow-duration="500ms">Now Trending</h2>

            <div class="col-sm-3">
                <figure class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                    <div class="img-wrapper">
                        <img src="images/portfolio/women_shoe3.png" class="img-responsive" alt="" >
                        <div class="overlay">
                            <div class="buttons">
                                <a rel="gallery" class="fancybox" href="images/portfolio/women_shoe3.png">Demo</a>        
                                <a target="_blank" href="">Details</a>
                            </div>
                        </div>
                    </div>
                    <figcaption>
                        <h4>
                            <a href="#">
                            </a>
                        </h4>
                      
                    </figcaption>
                </figure>
            </div-->

            <!--div class="col-md-6 col-sm-6"-->
        <security:authorize access="hasAnyRole('ROLE_USR')">
                <div class="block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="300ms">
                    <h1>
                    Update Customer Info
                    </h1><br>
                   <div class="modal-body row">
                    <div class="row">
                <div class="col-md-4">

                    <div class="form-group">
                        <label for="CustomerNumber">Customer Number:</label>
                        <input type="text" class="form-control" id="CustomerNumber">
                        <input type="hidden" class="form-control" id="CustomerNumber_copy">
                    </div>
  <button type="button" class="btn btn-default" onclick = "ValidateCustomerNumber()">Validate</button>
</div>
  
<div id="done_image" class="done_image" style="display:none">
<div class="column">
<label>Customer Updated</label>
</div>
<div class="column">
<img class="img-responsive" src="<c:url value="/resources/theme1/images/right.png" />"  height="42" width="42" alt="Chania">
</div>

</div>

  							<div class="col-md-4" id="Update_Customer_Information" style="display:none">

                            <h2>Customer Number Details</h2>
                            <p>Check the status values below:</p>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th colspan="3">Customer Information </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Customer Type</td>
                                        <td><input readonly type="text" class="form-control" id="CustomerType_value"></td>
                                        <td><input type="text" class="form-control" id="CustomerType_update"></td>
                                    </tr>
                                    <tr>
                                        <td>Account Key</td>
                                        <td><input readonly type="text" class="form-control" id="AccountKey_value"></td>
                                        <td><input type="text" class="form-control" id="AccountKey_update"></td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td><input readonly type="text" class="form-control" id="PhoneNumber_value"></td>
                                        <td><input type="number" class="form-control" id="PhoneNumber_update"></td>
                                    </tr>
                                    <tr>
                                        <td>Phone Type</td>
                                        <td><input readonly type="text" class="form-control" id="PhoneType_value"></td>
                                        <td><input type="text" class="form-control" id="PhoneType_update"></td>
                                    </tr>
                                    <tr>
                                        <td>Policy Product No</td>
                                        <td><input readonly type="text" class="form-control" id="PolicyProductNo_value"></td>
                                        <td><input type="text" class="form-control" id="PolicyProductNo_update"></td>
                                    </tr>
                                    <tr>
                                        <td>Last Updated Date </td>
                                        <td><input readonly type="text" class="form-control" id="LastUpdatedDate_value"></td>
                                        <td><input readonly type="text" class="form-control" id="LastUpdatedDate_value_copy"></td>
                                    </tr>
                                    <tr>
                                        <td>Authorization Status</td>
                                        <td><input readonly type="text" class="form-control" id="Authorization_status"></td>
                                        <td><input readonly type="text" class="form-control" id="Authorization_status_value"></td>
                                    </tr>
                                    <tr>
                                        <td>Authorization Comments</td>
                                        <td><input readonly type="text" class="form-control" id="Authorization_comments_value_new"></td>
                                        <td><input readonly type="text" class="form-control" id="Authorization_comments_status_value"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" class="btn btn-default" onclick = "UpdateCustomerInfo()">Update</button>
                            </div>

                                <div id="loader" style="display:none">
                                    <div class="loader" ></div>
                                </div>


                            </div>
                    </div>

                </div>
        </security:authorize>

        <security:authorize access="hasAnyRole('ROLE_ADMIN')">
            <div class="block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration="300ms">
                <h1>
                    Authorize Customer Information
                </h1><br>
                <div class="modal-body row">
                    <div class="row">
                        <div class="col-md-4">

                            <div class="form-group">
                                <label for="CustomerNumber">Customer Number:</label>
                                <input type="text" class="form-control" id="CustomerNumber_Auth">
                                <input type="hidden" class="form-control" id="CustomerNumber_copy_Auth">
                            </div>
                            <button type="button" class="btn btn-default" onclick = "ShowAuthCustomerNumber()">Check</button>
                        </div>

                        <div id="done_image_Auth" class="done_image_Auth" style="display:none">
                            <div class="column">
                                <label>Customer Authorized</label>
                            </div>
                            <div class="column">
                                <img class="img-responsive" src="<c:url value="/resources/theme1/images/right.png" />"  height="42" width="42" alt="Chania">
                            </div>

                        </div>

                        <div class="col-md-4" id="Update_Authorize_Information" style="display:none">

                            <h2>Customer Number Details</h2>
                            <p>Check the status values below:</p>
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th colspan="3">Customer Information </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Customer Type</td>
                                    <td><input readonly type="text" class="form-control" id="CustomerType_value_Auth"></td>
                                    <td><input readonly type="text" class="form-control" id="CustomerType_update_Auth"></td>
                                </tr>
                                <tr>
                                    <td>Account Key</td>
                                    <td><input readonly type="text" class="form-control" id="AccountKey_value_Auth"></td>
                                    <td><input readonly type="text" class="form-control" id="AccountKey_update_Auth"></td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td><input readonly type="text" class="form-control" id="PhoneNumber_value_Auth"></td>
                                    <td><input readonly type="number" class="form-control" id="PhoneNumber_update_Auth"></td>
                                </tr>
                                <tr>
                                    <td>Phone Type</td>
                                    <td><input readonly type="text" class="form-control" id="PhoneType_value_Auth"></td>
                                    <td><input readonly type="text" class="form-control" id="PhoneType_update_Auth"></td>
                                </tr>
                                <tr>
                                    <td>Policy Product No</td>
                                    <td><input readonly type="text" class="form-control" id="PolicyProductNo_value_Auth"></td>
                                    <td><input readonly type="text" class="form-control" id="PolicyProductNo_update_Auth"></td>
                                </tr>
                                <tr>
                                    <td>Last Updated Date </td>
                                    <td><input readonly type="text" class="form-control" id="LastUpdatedDate_value_Auth"></td>
                                    <td><input readonly type="text" class="form-control" id="LastUpdatedDate_value_copy_Auth"></td>
                                </tr>
                                <tr>
                                    <td>Authorization Status</td>
                                    <td><input readonly type="text" class="form-control" id="Authorization_status_Auth"></td>
                                    <td><input readonly type="text" class="form-control" id="Authorization_status_value_Auth"></td>
                                </tr>
                                <tr>
                                    <td>Authorizer Comments</td>
                                    <td><input type="text" class="form-control" id="Authorization_comments"></td>
                                    <td><input readonly type="hidden" class="form-control" id="Authorization_comments_value"></td>
                                </tr>
                                </tbody>
                            </table>
                            <button type="button" id="AuthorizeBtn" class="btn btn-default" onclick = "AuthorizeCustomerInfo()">Authorize</button>
                            <button type="button" id="RejectBtn" class="btn btn-danger" onclick = "RejectCustomerInfo()">Reject</button>
                        </div>

                        <div id="loader_Auth" style="display:none">
                            <div class="loader" ></div>
                        </div>


                    </div>
                </div>

            </div>
        </security:authorize>


            </div>

        </div>
    </div>
</section> <!-- /#about -->



            <!--
            ==================================================
            Footer Section Start
            ================================================== -->
            <%@ include file = "footer.jsp" %>
	<!-- Template Javascript Files
	================================================== -->
	<!-- jquery -->
	<script src="<c:url value="/resources/theme1/plugins/jQurey/jquery.min.js" />"></script>
	<!-- Form Validation -->
    <script src="<c:url value="/resources/theme1/plugins/form-validation/jquery.form.js" />"></script>
    <script src="<c:url value="/resources/theme1/plugins/form-validation/jquery.validate.min.js" />"></script>
	<!-- owl carouserl js -->
	<script src="<c:url value="/resources/theme1/plugins/owl-carousel/owl.carousel.min.js" />"></script>
	<!-- bootstrap js -->
	<script src="<c:url value="/resources/theme1/plugins/bootstrap/bootstrap.min.js" />"></script>
	<!-- wow js -->
	<script src="<c:url value="/resources/theme1/plugins/wow-js/wow.min.js" />"></script>
	<!-- slider js -->
	<script src="<c:url value="/resources/theme1/plugins/slider/slider.js" />"></script>
	<!-- Fancybox -->
	<script src="<c:url value="/resources/theme1/plugins/facncybox/jquery.fancybox.js" />"></script>
	<!-- template main js -->
	<script src="<c:url value="/resources/theme1/js/main.js" />"></script>
	<!-- Actions Here -->
	<script type="text/javascript" src="<c:url value="/resources/theme1/js/Actions.js" />"></script>

    <!--script>
        function logIn(){
            FB.login(function(resonse){

                console.log(resonse);
            })
        }
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '373519953128577',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script-->
 	</body>
</html>