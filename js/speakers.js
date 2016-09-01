$(document).ready(function() {
 
  var speakers = $("#speakers-owl");
 
  speakers.owlCarousel({
    loop:true,
    margin:2,
    autoWidth: true,
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
    autoplayTimeout:4000,
    autoplayHoverPause:true
  });


  var partners = $("#partners-owl");
 
  partners.owlCarousel({
    loop:true,
    margin:2,
    autoWidth: true,
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
    autoplayTimeout:4000,
    autoplayHoverPause:true  
  });
 
  var team = $("#team-owl");
 
  team.owlCarousel({
    loop:true,
    margin:5,
    autoWidth: true,
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
    autoplayTimeout:4000,
    autoplayHoverPause:true  
  });
});
