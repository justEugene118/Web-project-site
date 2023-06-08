$(document).ready(function(){
    $(".owl-one").owlCarousel({
        items: 3,
        loop: true,
        margin: 32,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $(".owl-two").owlCarousel({
        items: 4,
        loop: true,
        margin: 32,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
  });

