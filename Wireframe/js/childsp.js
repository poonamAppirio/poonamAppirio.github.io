
 function collapseNavbar(){
 	if($(".navbar").offset().top>50){
 		$(".navbar-fixed-top").addClass("top-nav-collapse");
 	}
 	else{$(".navbar-fixed-top").removeClass("top-nav-collapse");
 	}}

 	$(window).scroll(collapseNavbar);
 	$(document).ready(collapseNavbar);
 	$('.navbar-collapse ul li a').click(function(){
 		$(".navbar-collapse").collapse('hide');
 	});
