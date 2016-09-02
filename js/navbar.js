$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $(window).width();
   if (startchange > 800){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > 75) {
          $(".navbar").css('background-color', '#171414');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    }
});
