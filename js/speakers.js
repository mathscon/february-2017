$(document).ready(function() {
 
//  var speakers = $("#speakers-owl");
// 
//  speakers.owlCarousel({
//    margin:2,
//    responsive:{
//        0:{
//            items:1
//        },
//        512:{
//            items:2
//        },
//        768:{
//            items:3
//        },
//
//        1000:{
//            items:4
//        }
//    },
//    autoplay:true,
//    autoplayTimeout:5000,
//    autoplayHoverPause:true
//  });
//
//  $('#speaker-next').click(function() {
//      speakers.trigger('next.owl.carousel');
//  })
//
//  $('#speaker-prev').click(function() {
//      speakers.trigger('prev.owl.carousel');
//  })
//
//  var partners = $("#partners-owl");
// 
//  partners.owlCarousel({
//    margin:2,
//    responsive:{
//        0:{
//            items:1
//        },
//        800:{
//            items:2
//        },
//        1000:{
//            items:5
//        }
//    },
//    autoplay:true,
//    autoplayTimeout:5000,
//    autoplayHoverPause:true  
//  });
// 
  var team = $("#team-owl");
 
  team.owlCarousel({
    loop:true,
    margin:5,
    responsive:{
        0:{
            items:1
        },
        512:{
            items:2
        },
        768:{
            items:3
        },

        1000:{
            items:4
        }
    },
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true  
  });

  $('#team-next').click(function() {
      team.trigger('next.owl.carousel');
  })

  $('#team-prev').click(function() {
      team.trigger('prev.owl.carousel');
  })

});
