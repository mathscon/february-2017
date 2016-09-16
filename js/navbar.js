$(document).ready(function(){       

   $("html,body").animate({scrollTop: 0}, 1000);
   
   function collapseNavbar() {
       if ($(".navbar").offset().top > 50) {
           $(".navbar-fixed-top").addClass("top-nav-collapse");
       } else {
           $(".navbar-fixed-top").removeClass("top-nav-collapse");
       }
   }
   
   $(window).scroll(collapseNavbar);
   $(document).ready(collapseNavbar);

   $('.navbar-collapse ul li a').click(function() {
       $(this).closest('.collapse').collapse('toggle');
   });
});

