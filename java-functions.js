/* script for menu */
jQuery('#spinner-form').click(function () {
	
    
	if (jQuery('.header-menu nav').css('display') === 'none') {
        
        jQuery('.header-menu nav').slideToggle();
        
    } else {
        
        jQuery('.header-menu nav').slideToggle();
        
    }
    
});

//sticky header

jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
        jQuery('.header-menu').css({'top': '0', 'width': '100%'});
        //jQuery('.header-menu .header-logo').css({"margin": "5px"});
        //jQuery('.header-menu .header-logo img').css({"width": "250px"});
      //jQuery('.header-menu').addClass('sticky-header-bg');
      //jQuery('.sticky-header').css('padding', '25px 0px');
     
    } else if (jQuery(window).scrollTop() < 99) {
        jQuery('.header-menu').css({'top': '20px', 'width': '95%'});
        //jQuery('.header-menu .header-logo').css({"margin": "-15px 0 0 -25px"});
        //jQuery('.header-menu .header-logo img').css({"width": "356px"});
    }


    if (jQuery(window).scrollTop() > 1000) {
        jQuery('.head-illustration img').css({'display': 'none'});
    } else if (jQuery(window).scrollTop() < 999) {
        jQuery('.head-illustration img').css({'display': 'block'});
    }
    
	parallax();
    
});

function parallax(){
  var scrolled = jQuery(window).scrollTop();
  jQuery('.head-illustration').css('top',(545-(scrolled*0.8))+'px');
}