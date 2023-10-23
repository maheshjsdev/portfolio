$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut();
});

// owl carousel
$(function () {
    $("#home-content-inner").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        smartSpeed: 600,
        autoplay: true

    });
});