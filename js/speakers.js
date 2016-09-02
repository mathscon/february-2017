$(document).ready(function() {
 
  var speakers = $("#speakers-owl");
 
  speakers.owlCarousel({
    margin:2,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:4
        }
    },
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });


  var partners = $("#partners-owl");
 
  partners.owlCarousel({
    margin:2,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:5
        }
    },
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true  
  });
 
  var team = $("#team-owl");
 
  team.owlCarousel({
    loop:true,
    margin:5,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:4
        }
    },
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true  
  });
});
