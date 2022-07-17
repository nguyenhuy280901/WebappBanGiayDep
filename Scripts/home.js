$('.owl-carousel-setting').owlCarousel({
    items:1,
    loop: true,
    margin:0,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 1000,
})

$('.owl-product-setting').owlCarousel({
    loop:true,
    dots: false,
    margin: 10,
    nav:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    },
    autoplay: true,
    autoplayTimeout: 1200,
    autoplaySpeed: 800,
    slideTransition: 'linear',
    autoplayHoverPause: true
})
$('.owl-product-gallery-slide').owlCarousel({
    loop:true,
    
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})