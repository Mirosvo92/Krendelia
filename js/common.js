$(document).ready(function() {
	//hidden menu
	var count = 0;
	$(".hidden_menu").click(function(){
		if (count === 1) {
			$(".first_list").slideUp(1000);
			$("body").removeClass("scroll-hidden");
			return count = 0;
		}
		else{	
			$(".first_list").css("display", "flex").hide().slideDown(1000);
			$("body").addClass("scroll-hidden");
			return count++;
		}
	});
	//event for click (color)
	$(".load_prez").click(function(){
		$(".load_prez").css("color","red");
	}); 
	//stick
	$(window).load(function(){
		$("#main_navigation").sticky({ topSpacing: 0 , zIndex: 99999});
	});
	//hidden main menu
	$(".hidden_main_menu").click(function(){
		$(".close_hidden_main_menu").hide();
		$(".list_main_nav").css("display", "block").hide().slideDown(1000);
		//	$("body").addClass("scroll-hidden");
		$(".close_hidden_main_menu").show(1000);
	});
	$(".close_hidden_main_menu").click(function(){
		$(".list_main_nav").slideUp(1000);
		//	$("body").removeClass("scroll-hidden");
		$(".close_hidden_main_menu").hide(1000);
	});
	function autoClose(){
		$(".list_main_nav").slideUp(1000);
		$(".close_hidden_main_menu").hide(1000);
	};
	var menu = $('.first_list');
	var wid = $(window).width();
	var menuMainNav = $('.list_main_nav');
	//for the first menu and slip menu
	$(window).resize(function(){
		if(wid > 768) {
		    menu.removeAttr('style');
			menuMainNav.removeAttr('style');
			$(".close_hidden_main_menu").removeAttr('style');
		}
	});
	//niceScroll
	function niceScrollInit(){
		$("html").niceScroll({
			scrollspeed: 80,
			mousescrollstep: 65,
			cursorwidth: 10,
			cursorborder: 0,
			cursorcolor: '#55c4cf',
			cursorborderradius: 2,
			autohidemode: false,
			horizrailenabled: false
			
		});
		$('html').addClass('no-overflow-y');
	}
	//niceScroll
	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        niceScrollInit();
		}else{
        $('body').addClass('mobile');
	};
	//slide
	$('.sl_one').slick({
		dots: true,
		infinite: true,
		speed: 1000,
		autoplay: true,
		arrows: false
	});
    //slowly  scroll
	$(".want_cafe, .want_cafe2, .send_app").click(function(e){
		e.preventDefault();
		var coordinates = $("#submit_application").offset().top;
		$("html, body").animate({
			scrollTop: (coordinates - 150)
		},1200);
	});
	//slowly  scroll main menu
	function autoClose(){
		$(".list_main_nav").slideUp(1000);
		$(".close_hidden_main_menu").hide(1000);
	};
	function autoCloseMain(){
		$(".first_list").slideUp(1000);
		$("body").removeClass("scroll-hidden");
	};
	
	$(".ab_kr").click(function(e){
		e.preventDefault();
		var abKr = $("#the_most_recognizable").offset().top;
		$("html, body").animate({
			scrollTop: (abKr - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".format_fr").click(function(e){
		e.preventDefault();
		var formatFr = $("#included_in_the_package").offset().top;
		$("html, body").animate({
			scrollTop: formatFr
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".stat").click(function(e){
		e.preventDefault();
		var stat = $("#how_to_make").offset().top;
		$("html, body").animate({
			scrollTop: (stat - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".reviews").click(function(e){
		e.preventDefault();
		var reviews = $("#comment_of_owners").offset().top;
		$("html, body").animate({
			scrollTop: (reviews - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".cont").click(function(e){
		e.preventDefault();
		var cont = $("#contacts").offset().top;
		$("html, body").animate({
			scrollTop: (cont - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".main").click(function(e){
		e.preventDefault();
		var main = $(".head_info_wrap").offset().top;
		$("html, body").animate({
			scrollTop: (main - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".confectionery").click(function(e){
		e.preventDefault();
		var confectionery = $(".content_wrap").offset().top;
		$("html, body").animate({
			scrollTop: (confectionery - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".hall").click(function(e){
		e.preventDefault();
		var hall = $(".inline").offset().top;
		$("html, body").animate({
			scrollTop: (hall - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	$(".wholesale").click(function(e){
		e.preventDefault();
		var wholesale = $("#submit_application").offset().top;
		$("html, body").animate({
			scrollTop: (wholesale - 150)
		},1200);
		if( $(".hidden_main_menu").is(":visible")){ 
			autoClose();
		};
		if( $(".hidden_menu").is(":visible")){ 
			autoCloseMain();
		};
	});
	
	//animate
	
	if(wid >= 960){
	
	
	
	$(".for_anim").animated("rotateIn", "fadeOutDown");
	
	$(".an_right").animated("fadeInRight", "fadeOutDown");
	
	$(".an_left").animated("fadeInLeft", "fadeOutDown");
	
	$(".visitor1,.visitor2,.visitor3,.visitor4").animated("flipInX", "fadeOutDown");
	
	};
	
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});