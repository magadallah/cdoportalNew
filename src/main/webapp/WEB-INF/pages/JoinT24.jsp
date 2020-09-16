<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="security" %>

<!DOCTYPE html>
<html class="no-js">

<head>
    <!-- Basic Page Needs
        ================================================== -->
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="icon" href="favicon.ico">
    <title>CR2 Admin</title>
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
    <link rel="stylesheet" href="<c:url value="/resources/plugins/bootstrap/bootstrap.min.css" />">
    <!-- Ionicons Fonts Css -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/ionicons/ionicons.min.css" />">
    <!-- animate css -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/animate-css/animate.css" />">
    <!-- Hero area slider css-->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/slider/slider.css" />">
    <!-- owl craousel css -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/owl-carousel/owl.carousel.css" />">
    <link rel="stylesheet" href="<c:url value="/resources/plugins/owl-carousel/owl.theme.css" />">
    <!-- Fancybox -->
    <link rel="stylesheet" href="<c:url value="/resources/plugins/facncybox/jquery.fancybox.css" />">
    <!-- template main css file -->
    <link rel="stylesheet" href="<c:url value="/resources/css/style.css" />">
    
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
  width: 40.33%;
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
    <header id="top-bar" class="navbar-fixed-top animated-header">
        <div class="container">
            <div class="navbar-header">
                <!-- responsive nav button -->
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- /responsive nav button -->

                <!-- logo -->
                <div class="navbar-brand">
                    <a href="home">
                        <img src="<c:url value="/resources/images/logo.png"/>" alt="">
                    </a>
                </div>
                <!-- /logo -->
            </div>
            <!-- main menu -->
            <header id="top-bar" class="navbar-fixed-top animated-header">
                <div class="container">
                    <div class="navbar-header">
                        <!-- responsive nav button -->
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <!-- /responsive nav button -->

                        <!-- logo -->
                        <div class="navbar-brand">
                            <a href="home">
                                <img src="<c:url value="/resources/images/logo.png"/>" alt="">
                            </a>
                        </div>
                        <!-- /logo -->
                    </div>
                    <!-- main menu -->
                    <nav class="collapse navbar-collapse navbar-right" role="navigation">
                        <security:authorize access="hasAnyRole('ROLE_ADMIN')">
                        <div class="main-menu">
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="home">Update User-ID</a>
                                </li>
                                <!--li><a href="about.html">About</a></li-->
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services<span class="caret"></span></a>
                                    <div class="dropdown-menu">
                                        <ul>
                                            <li><a href="Accamend">Accounts / Loan</a></li>
                                            <li><a href="ccreactive">Credit Card Re-Activate - Deactivate</a></li>
                                            <li><a href="ccamend">Supplementary Credit Card Amend</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="JoinT24">Join Cust no / Sema</a></li>
                               
                                <li><a href="Reports">Reports</a></li>
                                
                                <li><a href="Logout">Logout</a></li>
                            </ul>
                        </div>
                       </security:authorize>
                       
                       <security:authorize access="hasAnyRole('ROLE_USR')">
                        <div class="main-menu">
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="home">Update User-ID</a>
                                </li>
                                <!--li><a href="about.html">About</a></li-->
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services<span class="caret"></span></a>
                                    <div class="dropdown-menu">
                                        <ul>
                                            <li><a href="Accamend">Accounts / Loan</a></li>
                                            <li><a href="ccreactive">Credit Card Re-Activate - Deactivate</a></li>
                                            <li><a href="ccamend">Supplementary Credit Card Amend</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="JoinT24">Join Cust no / Sema</a></li>
                               
                                
                                <li><a href="Logout">Logout</a></li>
                            </ul>
                        </div>
                       </security:authorize>
                    </nav>
                    <!-- /main nav -->
                </div>
            </header>
            <!-- /main nav -->
        </div>
    </header>
    <!--
        ================================================== 
            Global Page Section Start
        ================================================== -->
        <section class="global-page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>Join Cust no / Sema</h2>
                            <ol class="breadcrumb">
                                <li>
                                    <a href="home">
                                        <i class="ion-ios-home"></i>
                                        Home
                                    </a>
                                </li>
                                <li class="active">Join Cust no / Sema</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>


<!-- 
================================================== 
    Service Page Section  Start
================================================== 

<section id="service-page" class="pages service-page">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="block">
                    <h2 class="subtitle wow fadeInUp animated" data-wow-delay=".3s" data-wow-duration="500ms">What We Love To Do</h2>
                    <p class="subtitle-des wow fadeInUp animated" data-wow-delay=".5s" data-wow-duration="500ms">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis porro recusandae non quibusdam iure adipisci.</p>
                    <div class="row service-parts">
                        <div class="col-md-6">
                            <div class="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="600ms">
                                <i class="ion-ios-paper-outline"></i>
                                <h4>BRANDING</h4>
                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="800ms">
                                <i class="ion-ios-pint-outline"></i>
                                <h4>DESIGN</h4>
                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="1s">
                                <i class="ion-ios-paper-outline"></i>
                                <h4>DEVELOPMENT</h4>
                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="block wow fadeInUp animated" data-wow-duration="400ms" data-wow-delay="1.1s">
                                <i class="ion-ios-paper-outline"></i>
                                <h4>THEMEING</h4>
                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="block">
                    <img class="img-responsive" src="images/team.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</section>

================================================== 
    Works Section Start
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
            
                <div class="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
                    <h1>
                    Joint Customer Number / Sema
                    </h1><br>
                    <p>From this screen you can join the customer number and Sema <br>
                        Join button will directly join the provided T24 customer number with Sema

                    </p>
                    <div class="modal-body row">
                    <div class="row">
                <div class="col-md-4">

                    <div class="form-group">
  <label for="usr">T24 Customer Number:</label>
  <input type="number" max = "10" class="form-control" id="T24CustNo"  onkeypress="return isNumberKey(event)">
</div>
<div class="form-group">
  <label for="usr">Sema Number:</label>
  <input type="number"  min="1" max="6" class="form-control" id="SemaNum"  onkeypress="return isNumberKey(event)">
</div>
  
  <button type="button" class="btn btn-default" onclick = "JoinT24()">Join</button>
    <div id="done_image" class="done_image" style="display:none">
<div class="column">
<label>Customer Joined</label>
</div>
<div class="column">
<img class="img-responsive" src="<c:url value="/resources/images/right.png" />"  height="42" width="42" alt="Chania">
</div>

</div>

 <div id="loader" style="display:none">
<div class="loader" ></div> 
</div>
                   <!--div class="thumbnail">
      <a href="images/about/menshoe.png">
        <img src="images/about/menshoe.png" alt="Lights" style="width:100%">
        <div class="caption">
          <p>Sneakers</p>
        </div>
      </a>
    </div-->
  </div>
  <!--div class="row"-->
                <!--div class="col-md-3">
                 <div class="thumbnail">
      <a href="images/about/womenshoe.png">
        <img src="images/about/womenshoe.png" alt="Natural" style="width:100%">
        <div class="caption">
          <p>Heels</p>
        </div>
      </a>
    </div>
  </div-->
</div>
</div>
</div>

                </div>
                
            </div>
            
        </div>
    </div>
</section>
    <!-- 
        ================================================== 
            Clients Section Start
        ==================================================
        <section id="clients">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="subtitle text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay=".3s">Our Happy Clinets</h2>
                        <p class="subtitle-des text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay=".5s">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, error.</p>
                        <div id="clients-logo" class="owl-carousel">
                            <div>
                                <img src="images/clients/logo-1.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-2.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-3.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-4.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-5.jpg" alt="">
                            </div>
                             <div>
                                <img src="images/clients/logo-1.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-2.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-3.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-4.jpg" alt="">
                            </div>
                            <div>
                                <img src="images/clients/logo-5.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->





            <!--
            ==================================================
            Call To Action Section Start
            ================================================== -->
           <!--section id="call-to-action">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block">
                                <h2 class="title wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">WHAT DO YOU THINK ?</h1>
                                <p class="wow fadeInDown" data-wow-delay=".5s" data-wow-duration="500ms">If you need to ask or purchase any of our products please contact us.</p>
                                <a href="contact.html" class="btn btn-default btn-contact wow fadeInDown" data-wow-delay=".7s" data-wow-duration="500ms">Contact With Me</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section-->

            <!--
            ==================================================
            Footer Section Start
            ================================================== -->
             <footer id="footer">
                <div class="container">
                    <div class="col-md-8">
                        <p class="copyright">Copyright: <span><script>document.write(new Date().getFullYear())</script></span> Design and Developed by <a href="#" target="_blank">Digital and Devlopment team</a>. <br> 
                            
                        </p>
                    </div>
                    <div class="col-md-4">
                        <!-- Social Media -->
                        <!--ul class="social">
                            <li>
                                <a href="#" class="Facebook">
                                    <i class="ion-social-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="Twitter">
                                    <i class="ion-social-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="Linkedin">
                                    <i class="ion-social-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="Google Plus">
                                    <i class="ion-social-googleplus"></i>
                                </a>
                            </li>
                        </ul>
                    </div-->
                </div>
            </footer> <!-- /#footer -->

	<!-- Template Javascript Files
	================================================== -->
<!-- jquery -->
	<script src="<c:url value="/resources/plugins/jQurey/jquery.min.js" />"></script>
	<!-- Form Validation -->
    <script src="<c:url value="/resources/plugins/form-validation/jquery.form.js" />"></script> 
    <script src="<c:url value="/resources/plugins/form-validation/jquery.validate.min.js" />"></script>
	<!-- owl carouserl js -->
	<script src="<c:url value="/resources/plugins/owl-carousel/owl.carousel.min.js" />"></script>
	<!-- bootstrap js -->
	<script src="<c:url value="/resources/plugins/bootstrap/bootstrap.min.js" />"></script>
	<!-- wow js -->
	<script src="<c:url value="/resources/plugins/wow-js/wow.min.js" />"></script>
	<!-- slider js -->
	<script src="<c:url value="/resources/plugins/slider/slider.js" />"></script>
	<!-- Fancybox -->
	<script src="<c:url value="/resources/plugins/facncybox/jquery.fancybox.js" />"></script>
	<!-- template main js -->
	<script src="<c:url value="/resources/js/main.js" />"></script>
	<!-- Actions Here -->
	<script type="text/javascript" src="<c:url value="/resources/js/Actions.js" />"></script>
 	</body>
</html>