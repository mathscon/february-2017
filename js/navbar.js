$(document).ready(function(){       
   var scroll_start = 0;
   var collapsed = true;
   $(document).scroll(function() { 
   var startchange = $(window).width();
      scroll_start = $(this).scrollTop();
      if(scroll_start > 0) {
          navbarGrey();
       } else {
          navbarTransparent();
       }
   });

   $(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
   });

   $(document).on('click','#collapse',function(e) {
     if($(this).scrollTop() == 0) {
       if($('.navbar-collapse').is(':visible')) {
	  navbarGrey();
       } else {
          navbarTransparent();
       }
     } else {
	  navbarGrey();
     }
   });

});

var navbarTransparent = function() {
  $('.navbar').css('background-color', 'transparent');
}

var navbarGrey = function() {
  $(".navbar").css('background-color', '#171414');
}
