
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<title>Story Box</title>
 
<script type="text/javascript">
//<![CDATA[
try{if (!window.CloudFlare) {var CloudFlare=[{verbose:0,p:0,byc:0,owlid:"cf",bag2:1,mirage2:0,oracle:0,paths:{cloudflare:"/cdn-cgi/nexp/dok3v=1613a3a185/"},atok:"97f916a132790681eb370930ac57f296",petok:"84b1ca917044fa2e3bf9aa4ad9c56ffca38ade2e-1445391853-1800",zone:"easy-development.com",rocket:"0",apps:{"abetterbrowser":{"ie":"7"}}}];!function(a,b){a=document.createElement("script"),b=document.getElementsByTagName("script")[0],a.async=!0,a.src="//ajax.cloudflare.com/cdn-cgi/nexp/dok3v=e9627cd26a/cloudflare.min.js",b.parentNode.insertBefore(a,b)}()}}catch(e){};
//]]>
</script>
<link href="http://demonstration.easy-development.com/story-box/bootstrap/css/bootstrap.css" rel="stylesheet">
 
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
  <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
  <![endif]-->
<link href="http://demonstration.easy-development.com/story-box/story-box/animate.css" rel="stylesheet" type="text/css">
<link href="http://demonstration.easy-development.com/story-box/story-box/story-box-zen.css" rel="stylesheet" type="text/css">
<script src="http://demonstration.easy-development.com/story-box/story-box/jquery.js"></script>
<script src="http://demonstration.easy-development.com/story-box/bootstrap/js/bootstrap.min.js"></script>
<script src="http://demonstration.easy-development.com/story-box/story-box/story-box.min.js"></script>
<style>.glyphicon-container .glyphicon{font-size:8em;text-align:center;display:block;width:100%;}</style>
<script type="text/javascript">
    $(document).ready(function(){
      $('.container .text-block-container').each(function(){
        var maxHeight = 0;

        $(this).find('.text-block').each(function(){
          maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
        });

        $(this).find('.text-block').css('height', maxHeight);
      });
    });
  </script>
</head>
<body>
<div role="navigation" class="navbar navbar-default navbar-fixed-top">
<div class="container" style="width:90%;">
<div class="navbar-header">
<button data-target=".bs-navbar-collapse" data-toggle="collapse" type="button" class="navbar-toggle">
<span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
</button>
<a class="navbar-brand" href="index.php">Story Box</a>
</div>
<nav role="navigation" class="collapse navbar-collapse bs-navbar-collapse">
<ul class="nav navbar-nav">
<li class="active">
<a href="index.php">Home</a>
</li>
<li>
<a href="why.php" style="color:#e74c3c;">Why StoryBox</a>
</li>
<li>
<a href="demo.php">Demonstration</a>
</li>
<li>
<a href="unique-demo.php">Unique Demonstration</a>
</li>
<li>
<a href="basic-demo.php">Spartan Demonstration</a>
</li>
<li>
<a href="zen-demo.php" style="color:#428BCA;">Zen Demonstration</a>
</li>
</ul>
</nav>
</div>
</div>
<div class="jumbotron">
<div class="row">
<div class="col-md-10 col-sm-offset-1">
<h1 class="text-center text-primary" data-sb="bounceInDown" data-sb-hide="fadeOutUp">Story Box</h1>
<h2 class="text-success text-center" data-sb="bounceInDown" data-sb-hide="fadeOutUp">Because every website has to offer an unique experience</h2>
<div class="button-container" style="max-width:400px;margin:0 auto;">
<a class="btn btn-success btn-lg" data-sb="bounceInLeft" data-sb-hide="fadeOutUp" href="https://github.com/easy-development/jquery-story-box">Download Now &raquo;</a>
<a class="btn btn-danger btn-lg" data-sb="bounceInLeft" data-sb-hide="fadeOutUp" target="_blank" href="http://caniuse.com/css-animation">Browser Support &raquo;</a>
</div>
<h3 class="text-danger text-center" data-sb="bounceInDown" data-sb-hide="fadeOutUp">Yes, Browsers that are not supported, will simply be "magic free". Stress Free</h3>
<h3 class="text-success text-center" data-sb="bounceInDown" data-sb-hide="fadeOutUp">Live Examples</h3>
<h3 class="text-danger text-center" data-sb="bounceInDown" data-sb-hide="fadeOutUp">The Exit Effects ( hide after display ) are optional</h3>
<div class="button-container" style="max-width:860px;margin:0 auto;">
<a class="btn btn-primary btn-lg" data-sb="bounceInLeft" data-sb-hide="fadeOutUp" href="demo.php">
Demonstration &raquo;
</a>
<a class="btn btn-success btn-lg" data-sb="bounceInLeft" data-sb-hide="fadeOutUp" href="unique-demo.php">
Unique Demonstration &raquo;
</a>
<a class="btn btn-danger btn-lg" data-sb="bounceInLeft" data-sb-hide="fadeOutUp" href="why.php">
Why Story Box &raquo;
</a>
<a class="btn btn-warning btn-lg" data-sb="bounceInLeft" data-sb-hide="fadeOutUp" href="basic-demo.php">
Spartan Demonstration &raquo;
</a>
</div>
</div>
</div>
</div>
<div class="container" style="width: 95%">
<div class="panel panel-default">
<div class="panel-body">
<div class="container">
<div class="row glyphicon-container text-block-container">
<div class="col-md-4" data-sb="zenFadeInRightBig" data-sb-hide="zenFadeOutDown">
<h2 class="text-center">CSS Transitions</h2>
<p class="text-block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We use the transitions Provided by Animate.CSS, they are smooth & awesome <strong>+ 10 Zen Special Animations created by us, for you</strong></p>
<span class="glyphicon glyphicon-heart"></span>
</div>
<div class="col-md-4" data-sb="zenFadeInUpBig" data-sb-hide="zenFadeOutDown">
<h2 class="text-center">Cross Browser & Device</h2>
<p class="text-block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Story tale works on any major browser, it doesn't effect older browsers and it simply doesn't animate anything</p>
<span class="glyphicon glyphicon-glass"></span>
</div>
<div class="col-md-4" data-sb="zenFadeInLeftBig" data-sb-hide="zenFadeOutDown">
<h2 class="text-center">Works independently</h2>
<p class="text-block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This jQuery Extension works alone, you don't need any Javascript Skills, Only HTML</p>
<span class="glyphicon glyphicon-flash"></span>
</div>
</div>
<br/><br/>
<div class="row glyphicon-container text-block-container">
<div class="col-md-4" data-sb="zenFadeInRightBig" data-sb-hide="zenFadeOutDown">
<h2 class="text-center">One Minute Setup</h2>
<p class="text-block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We've put a lot of effort making this plugin working within one minute, and we've tested it countless times</p>
<span class="glyphicon glyphicon-time"></span>
</div>
<div class="col-md-4" data-sb="zenFadeInUpBig" data-sb-hide="zenFadeOutDown">
<h2 class="text-center">24/7 Email Support</h2>
<p class="text-block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We offer 24/7 Email support, anytime, no matter what, holidays or not, We are there for you.</p>
<span class="glyphicon glyphicon-send"></span>
</div>
<div class="col-md-4" data-sb="zenFadeInLeftBig" data-sb-hide="zenFadeOutDown">
<h2 class="text-center">Define Yourself</h2>
<p class="text-block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create an Unique identity on the web, using Story Box, think different, be different</p>
<span class="glyphicon glyphicon-credit-card"></span>
</div>
</div>
</div>
<div class="clearfix"></div>
<div style="height: 200px;display: block;width: 100%;"></div>
<div class="clearfix"></div>
<div class="row">
<div class="col-md-12">
<div class="row">
<div class="col-md-12" data-sb="zenFadeInLeftBig" data-sb-hide="zenFadeOutDown">
<span style="padding: 15px;display: block;background: #9b59b6;color:#ffffff;font-size: 3em;" class="text-center">Created for your Themes & Templates</span>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<h3 style="background: #27AE60;padding: 10px; 20px;color: #ffffff;" data-sb="zenFadeInDown" data-sb-hide="zenFadeOutDown">Entrance Effects</h3>
<table class="table table-bordered" data-sb="zenFadeInUp" data-sb-hide="zenFadeOutDown">
<tr>
<td>
fadeInUp </td>
<td>
fadeInRight </td>
<td>
fadeInDown </td>
<td>
fadeInLeft </td>
</tr><tr> <td>
fadeInUpBig </td>
<td>
fadeInRightBig </td>
<td>
fadeInDownBig </td>
<td>
fadeInLeftBig </td>
</tr><tr> <td>
zenFadeInUp </td>
<td>
zenFadeInRight </td>
<td>
zenFadeInDown </td>
<td>
zenFadeInLeft </td>
</tr><tr> <td>
zenFadeInUpBig </td>
<td>
zenFadeInRightBig </td>
<td>
zenFadeInDownBig </td>
<td>
zenFadeInLeftBig </td>
</tr><tr> <td>
bounceInUp </td>
<td>
bounceInRight </td>
<td>
bounceInDown </td>
<td>
bounceInLeft </td>
</tr><tr> <td>
flipInX </td>
<td>
flipInY </td>
<td>
rotateIn </td>
<td>
rotateInDownLeft </td>
</tr><tr> <td>
rotateInDownRight </td>
<td>
rotateInUpLeft </td>
<td>
rotateInUpRight </td>
<td>
pulse </td>
</tr><tr> <td>
swing </td>
<td>
wobble </td>
<td>
flash </td>
<td>
tada </td>
</tr><tr> </tr>
</table>
<h3 style="background: #e74c3c;padding: 10px; 20px;color: #ffffff;" data-sb="zenFadeInDown" data-sb-hide="zenFadeOutDown">Exit Effects | Optional</h3>
<table class="table table-bordered" data-sb="zenFadeInUp" data-sb-hide="zenFadeOutDown">
<tr>
<td>
hinge </td>
<td>
zenFadeOutUp </td>
<td>
zenFadeOutRight </td>
<td>
zenFadeOutDown </td>
</tr><tr> <td>
zenFadeOutLeft </td>
<td>
zenFadeOutUpBig </td>
<td>
zenFadeOutRightBig </td>
<td>
zenFadeOutDownBig </td>
</tr><tr> <td>
zenFadeOutLeftBig </td>
<td>
bounceOutUp </td>
<td>
bounceOutRight </td>
<td>
bounceOutDown </td>
</tr><tr> <td>
bounceOutLeft </td>
<td>
flipOutX </td>
<td>
flipOutY </td>
<td>
rotateOut </td>
</tr><tr> <td>
rotateOutDownLeft </td>
<td>
rotateOutDownRight </td>
<td>
rotateOutUpLeft </td>
<td>
rotateOutUpRight </td>
</tr><tr> </tr>
</table>
</div>
</div>
</div>
</div>
</div>
<footer>
<div class="well">
<div class="container">
@ Easy Development
</div>
</div>
</footer></body>
</html>
