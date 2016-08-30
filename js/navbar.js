$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#about');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 75) {
          $(".navbar").css('background-color', '#171414');
       } else {
          $('.navbar').css('background-color', 'transparent');
       }
   });
    }
});
