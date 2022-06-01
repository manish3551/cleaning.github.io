$(document).ready(function(){
    // HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            }
        }
    })
});

$(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            autoplay: true,
            autoplaySpeed: 1000,
            items: 1,
            smartSpeed: 800,
            
        })
});
