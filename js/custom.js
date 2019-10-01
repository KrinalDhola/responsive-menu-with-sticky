/***************************************************************************************************************
||||||||||||||||||||||||||||        CUSTOM SCRIPT FOR CONSULTIVE            |||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************
01. Revolution slider
02. Sticky header
03. Prealoader
04. Language switcher
05. prettyPhoto
06. BrandCarousel
07. Testimonial carousel
08. ScrollToTop 
09. Cart Touch Spin
10. PriceFilter
11. Cart touch spin
12. Fancybox activator
13. ContactFormValidation
14. Scoll to target
15. PrettyPhoto

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/

"use strict";

//===RevolutionSliderActiver===
function revolutionSliderActiver () {
	if ($('.rev_slider_wrapper #slider1').length) {
		$("#slider1").revolution({
			sliderType:"standard",
			sliderLayout:"auto",
			delay:5000,
            startwidth:1170,
		    startheight:800,
            
             navigationType:"bullet",
		  navigationArrows:"0",
		  navigationStyle:"preview4",
            
            dottedOverlay:'yes',
            
            hideTimerBar:"off",
            onHoverStop:"off",
			navigation: {
				arrows:{enable:true} 
			}, 
            gridwidth: [1170],
            gridheight: [800]
		});
	}; 
}

//====Main menu===
function mainmenu() {
	//Submenu Dropdown Toggle
	if($('.main-menu li.dropdown ul').length){
		$('.main-menu li.dropdown').append('<div class="dropdown-btn"></div>');
		
		//Dropdown Button
		$('.main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

}

//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}
// Dom Ready Function
jQuery(document).on('ready', function () {
	(function ($) {
        // add your functions
        revolutionSliderActiver ();
        mainmenu ();
        servicecarousel ();
        projectMasonaryLayout ();
        historyCarousel ();
        brandCarousel ();
        testimonialSlide ();
        achivementCarousel ();
        scrollToTop ();
        prettyPhoto ();
        CounterNumberChanger ();
        accordion ();
        cartTouchSpin ();
        selectDropdown ();
        priceFilter ();
        datepicker ();
        timepicker ();
        searchbox ();
        tooltip ();
        languageSwitcher()
  
 
	})(jQuery);
});


// Scroll Function
jQuery(window).on('scroll', function(){
	(function ($) {
	stickyHeader()
    
	})(jQuery);
});



