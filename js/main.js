$(function () {
    $('.j-slider').owlCarousel({
        responsiveClass:true,
        nav:true,
        navText: ["<img src='images/arrow_prev.png'>","<img src='images/arrow_next.png'>"],
        dots:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('#slider1').bxSlider({
      mode: 'fade',
      auto: true,
      minSlides:1,
      maxSlides:4,
      pager:false,
      autoControls: true,
      pause: 4000
    });
    $('.j-slider1').owlCarousel({
        responsiveClass:true,
        nav:true,
        navText: ["<img src='images/second_slider_prev.png'>","<img src='images/second_slider_next.png'>"],
        dots:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            750:{
                 items:3
            },
            1000:{
                items:4
            }
        }
    })


    $( ".hamburger" ).click(function() {
       $( ".menu" ).toggle( "slow" );
    });
   
});
