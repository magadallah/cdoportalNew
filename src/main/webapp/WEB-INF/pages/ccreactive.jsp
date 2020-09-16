<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="security" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
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
    <link rel="stylesheet" href="<c:url value="/resources/theme1/jqwidgets/styles/jqx.base.css"  />">
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
            Global Page Section Start
        ================================================== -->
    <section class="global-page-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block">
                        <h2>Authorizing Data</h2>
                        <ol class="breadcrumb">
                            <li>
                                <a href="home">
                                    <i class="ion-ios-home"></i> Home
                                </a>
                            </li>
                            <li class="active">Check all Unauthorized</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ================================================== 
    Company Description Section Start
================================================== -->
    <section id="about">
        <div class="container-fluid">
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
            <div class="row">

            <div class="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
                <h1>
                    UnAuthorized Customer Information
                    </h1>
                <br>

                <div class="col-sm-3 col-md-6 col-lg-4">

                        <div class="form-group">
                                <label>Sema Number:</label>
                                <input type="text" class="form-control" id="sema_num">
                            </div>


                            <!--button type="button" class="btn btn-default" onclick = "ValidateCCReAct()">Validate</button-->

                        </div>
                <div id='jqxWidget' style="font-size: 13px; font-family: Verdana; float: left;">
                    <div id="grid"></div>
                </div>
                        
                        <div id="done_image" class="done_image" style="display:none">
<div class="column">
<label>Customer Updated</label>
</div>
<div class="column">
<img class="img-responsive" src="<c:url value="/resources/theme1/images/right.png" />"  height="42" width="42" alt="Chania">
</div>

</div>
                        <div class="col-sm-9 col-md-6 col-lg-8" id= "GetAllUnauthorized" style="display:none">


                            <h2>Credit Card Details</h2>
                            <p>Check the status values below:</p>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Text 1</th>
                                        <th>Text 2</th>
                                        <th>Text 3</th>
                                        <th>Text 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="text" class="form-control" id="Text1" readonly></td>
                                        <td><input type="text" class="form-control" id="Text2" readonly></td>
                                        <td><input type="text" class="form-control" id="Text3" readonly></td>
                                        <td><input type="text" class="form-control" id="Text4" readonly></td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                            <button type="button" class="btn btn-default" onclick="ReActivateCC()">Re-Activate</button>
                            <button type="button" class="btn btn-default" onclick="DeActivateCC()">Deactivate</button>
                            </div>
                            
                            <div id="loader" style="display:none">
<div class="loader" ></div> 
</div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>

    <!--        ==================================================
            Footer Section Start
            ================================================== -->
    <%@ include file = "footer.jsp" %>
    <!-- /#footer -->

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
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxcore.js" />"></script>
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxdata.js" />"></script>
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxbuttons.js" />"></script>
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxscrollbar.js" />"></script>
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxmenu.js" />"></script>
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxgrid.js" />"></script>
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxgrid.selection.js" />"></script>
    <script type="text/javascript" src="<c:url value="/resources/theme1/jqwidgets/jqxtabs.js" />"></script>

</body>

</html>