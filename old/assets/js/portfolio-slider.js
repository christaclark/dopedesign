/* ================================================
Template Name: ARCHEN - ONE PAGE MULTIPURPOSE HTML5/CSS3 WEBSITE TEMPLATE
Description: One page multipurpose website template
Version: 1.0
Author: Code & Square
Author URI: codeandsquare.com
================================================ */


(function ($) {
  "use strict";
    
    
//	SLIDER
    var time = 5; // time in seconds

     var $progressBar,
         $bar, 
         $elem, 
         isPause, 
         tick,
         percentTime;
	 
     //init the carousel
     $("#porfolio-slider").find('.owl-carousel').owlCarousel({
         slideSpeed : 500,
         paginationSpeed : 500,
         singleItem : true,
         pagination: true,
         afterInit : progressBar,
         afterMove : moved,
         startDragging : pauseOnDragging,
         //autoHeight : true,
         transitionStyle : "fadeUp"
     });
	 
     //init progressBar where elem is $("#owl-demo")
     function progressBar(elem){
         $elem = elem;
         //build progress bar elements
         buildProgressBar();
         //start counting
         start();
     }
	 
     //create div#progressBar and div#bar then append to $(".owl-carousel")
     function buildProgressBar(){
         $progressBar = $("<div>",{
             id:"progressBar"
         });
         $bar = $("<div>",{
             id:"bar"
         });
         $progressBar.append($bar).appendTo($elem);
     }
	 
     function start() {
         //reset timer
         percentTime = 0;
         isPause = false;
         //run interval every 0.01 second
         tick = setInterval(interval, 10);
     };
	 
     function interval() {
         if(isPause === false){
             percentTime += 1 / time;
             $bar.css({
                 width: percentTime+"%"
             });
             //if percentTime is equal or greater than 100
             if(percentTime >= 100){
                 //slide to next item 
                 $elem.trigger('owl.next')
             }
         }
     }
	 
     //pause while dragging 
     function pauseOnDragging(){
         isPause = true;
     }
	    
     //moved callback
     function moved(){
         //clear interval
	      clearTimeout(tick);
         //start again
         start();
     }
    
    
})(jQuery);
