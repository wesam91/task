$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        touchMove: true
    });

    $('.responsive').slick({

        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
});



$(".shiping1 i").click(function () {

    $(".shiping1 ul").slideToggle(100);
    $(".shiping1 .fa-plus").toggleClass("dis-none");
    $(".shiping1 .fa-minus").toggleClass("dis-none");
});
$(".shiping3 i").click(function () {
    $(".toggle").slideToggle(100);
    $(".shiping3 .fa-plus").toggleClass("dis-none");
    $(".shiping3 .fa-minus").toggleClass("dis-none");
});
$(".shiping2 i").click(function () {
    $(".shiping2 ul").slideToggle(100);
    $(".shiping2 .fa-plus").toggleClass("dis-none");
    $(".shiping2 .fa-minus").toggleClass("dis-none");
});
