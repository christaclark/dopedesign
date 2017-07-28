/* ================================================
Template Name: ARCHEN - ONE PAGE MULTIPURPOSE HTML5/CSS3 WEBSITE TEMPLATE
Description: One page multipurpose website template
Version: 1.0
Author: Code & Square
Author URI: codeandsquare.com
================================================ */


(function ($) {
  "use strict";
    
    
//  INITIALIZE ANIMSITION
    if($(".animsition").length){
        $(".animsition").animsition({
            inClass               :   'fade-in-up-sm',
            outClass              :   'fade-out-up-sm',
            inDuration            :    1100,
            outDuration           :    800,
            linkElement           :   '.animsition-link',
            loading               :    true,
            loadingParentElement  :   'body', 
            unSupportCss          : [ 'animation-duration',
                                     '-webkit-animation-duration',
                                     '-o-animation-duration'
                                    ],
            overlay               :   false,
            overlayClass          :   'animsition-overlay-slide',
            overlayParentElement  :   'body'
        });
    }
    

//	INTRO CAROUSEL
    $('#introCarousel').carousel({
        interval: 4000 //changes the speed
    });
    
    
//	NAVIGATION
	var isLateralNavAnimating = false;
	
	$('.nav-trigger').on('click', function(event){
		event.preventDefault();

		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){

				isLateralNavAnimating = false;
			});
		}
	});
    
    
    //	PAGE SCROLL
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 900);
                return false;
            }
        }
    });
    
    
    //	PROJECTS SLIDER
    $('.flexslider-works').flexslider({
        animation: "slide"
    });
    
    // Prev Next Buttons
    $('.prev-comment, .next-comment').on('click', function() {
        var href = $(this).attr('href');
        $('#testimonial-slider').flexslider(href)
        return false;
    })
    
    
    //	TESTIMONIAL FLEXSLIDER
    $('#testimonial-slider').flexslider({
	      animation: 'slide',
	      controlNav: false,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
    });
    
    
    //  PORTFOLIO OWL CAROUSEL	  
    $("#owl-slider-posts").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true

    });
    
    
    //	CLIENTS CAROUSEL
    $("#clients-carousel").owlCarousel({
        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: true,
        autoPlay: true,
        itemsCustom: [
            [0, 1],
            [450, 2],
            [600, 2],
            [700, 2],
            [1000, 4],
            [1200, 5],
            [1400, 5],
            [1600, 5]
        ],
    });
    
    
    //  COUNTER SECTION
    $('#counter').appear(function() {

        $('.count-single').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }, {
        accX: 0,
        accY: -50
    });
    
    
    //	TOOLTIP
    $('[data-toggle="tooltip"]').tooltip()
    
    
    //	SKILLBAR
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },9000);
    });
    
    
    //  VIDEO FEATURE
    $(function(){
        $('.play_video').click(function(e){
            e.preventDefault();	

            var video_link = $(this).data('video');
            video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

            $('.video-frame').append(video_link).fadeIn(200);
        });


        $('.close_video').click(function(e){
            e.preventDefault();	
            
            $('.video-frame').fadeOut(200,function(){
                $('iframe', this).remove();
            });

        });
    });
    
    
    //  FEATURES ALT ANIMATE
    var initFeaturesWayPoint = function() {
        if ( $('#features-alt').length > 0 ) {
			$('#features-alt').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout(function(){
						$('.feature06-img-01').addClass('fadeInUp animated');
					}, 100);
                    
                    setTimeout(function(){
						$('.feature06-img-02').addClass('fadeInRight animated');
					}, 100);
                    
                    setTimeout(function(){
						$('.feature06-img-03').addClass('fadeInLeft animated');
					}, 100);
					
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '75%' } );
		}
	};
    initFeaturesWayPoint();
    
    
    //	INTRO IMAGE BACKSTRETCH
    $('.intro-wrap').backstretch([
        "http://placehold.it/1920x1080", 
        "http://placehold.it/1920x1080",
        "http://placehold.it/1920x1080"
    ], {duration: 2000, 
        fade: 750
       });		  


    //	COUNTDOWN
    // cowntdown function. Set the date by modifying the date in next line (June 1, 2012 00:00:00):
	var coundownTimer = new Date("December 31, 2018 00:00:00");
		$('#countdown').countdown({until: coundownTimer, layout: '<div class="item"><p>{dn}</p> {dl}</div> <div class="item"><p>{hn}</p> {hl}</div> <div class="item"><p>{mn}</p> {ml}</div> <div class="item"><p>{sn}</p> {sl}</div>'});
		$('#year').text(coundownTimer.getFullYear());
    
    
    //	SUBSCRIBE AJAX MAILCHIMP FORM
	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://codeandsquare.us11.list-manage.com/subscribe/post?u=2a14dee51c1c79d79d01d17b3&amp;id=da88437b43'


	$('#mc-form').ajaxChimp({

		language: 'es',
        url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	};
    
    
})(jQuery);
