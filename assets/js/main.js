(function ($) {
"use strict";

/* search */	
$('.search-open').on('click', function(){
	$('.search-inside').fadeIn();
});
$('.search-close').on('click', function(){
	$('.search-inside').fadeOut();
});		

  
/* meanmenu */
$('.main-menu nav').meanmenu({
	 meanMenuContainer: '.mobile-menu',
	 meanScreenWidth: "991",
     meanMenuOpen: ["<span />", "<span />", "<span />"] 
 });
 
 
/* slider-active */
$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
	navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


/* testimonial-active */
$('.testimonial-active').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



/* counter */
$('.counter').counterUp({
    delay: 10,
    time: 1000
});



/* image-link */
$('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

/* blog-thumb-active */
$('.blog-thumb-active').owlCarousel({
    loop:true,
    nav:true,
	autoplay:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



/* Scroll Up */
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="fa fa-angle-up"></i>',
});	


/* magnificPopup */
$('.video-popup').magnificPopup({
  type: 'iframe'
});

/* blog-thumb-active */
$('.blog-thumb-active').owlCarousel({
    loop:true,
    nav:true,
	autoplay:true,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* WOW active */
new WOW().init();

/* brand-active */
$('.brand-active').owlCarousel({
    loop:true,
    nav:false,
	autoplay:true,
    margin: 30,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1000:{
            items:5
        }
    }
})



$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('<div class="time-count">%D <span>days</span></div><div class="time-count">%H <span>hour</span></div><div class="time-count">%M <span>minute</span></div><div class="time-count">%S <span>Second</span></div>'));
  });
});











})(jQuery);	