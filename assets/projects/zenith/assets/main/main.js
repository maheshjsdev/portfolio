// Preloader
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(800).fadeOut();
});

// testimonials
$(function () {
    // Owl Carousel
    var owl = $("#testi");
    owl.owlCarousel({
        items: 2,
        margin: 10,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1199: {
                items: 2,
            }
        }
    });
});
//   back to top
$(function () {
    $("div#back-to-top").click(function () {
        $('html').animate({ scrollTop: 0 }, '500');
    });
    $(window).scroll(function () {
        backBtn();
    })
    backBtn();

    function backBtn() {
        if ($(window).scrollTop() > 400) {
            $("div#back-to-top").fadeIn();
        }
        else {
            $("div#back-to-top").fadeOut();
        }
    }
});
// animation js
$(function () {
    new WOW().init();
});
$(window).on("load", function(){
$("#home-heading1").addClass("animate__fadeInDown");
$("#home-heading2").addClass("animate__fadeInLeft");
$("#home-para").addClass("animate__zoomIn");
$("#home-btn").addClass("animate__flipInX");
})