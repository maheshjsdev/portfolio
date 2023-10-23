// preloader
$(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut();
});

// owl carousel
/* ===================
  team
===================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        nav: true,
        dots: false,
        // navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    });

});

// progress bar
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({ width: $(this).attr("aria-valuenow") + "%" });
        }, 2000);

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

// responsive tabs
$(function () {
    $("#service-tabs").responsiveTabs({
        animation: 'slide',
    });
});

/* ===================
  portfolio
===================== */
$(window).on("load", function () {
    // int isotope
    $("#isotope-container").isotope({
    });
    $("#isotope-filters").on("click", "button", function () {
        // get filter val
        var filterValue = $(this).attr("data-filter");
        $("#isotope-container").isotope({
            filter: filterValue
        });
        // active btn
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});
    
/* ===================
  magnifier popup
===================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
})
/* ===================
  testimonials
===================== */
// owl carousel
$(function () {
    $("#testimonials-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        nav: true,
        dots: false,
        // navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayHoverPause: true
    });

});
/* ===================
  counter
===================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/* ===================
  client logo
===================== */
$(function () {
    $("#client-list").owlCarousel({
        // items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1199: {
                items: 6
            }
        },
        // margin:10,
        // navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplayHoverPause: true
    });
});

/* ===================
  navigation
===================== */
// show and hide white navigation

$(function () {
    // hide and show on page load
    showHideNav();
    $(window).scroll(function () {
        // hide show on window load
        showHideNav();

    });
    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top")
            $(".navbar-brand img").attr("src", "assets/img/logo-dark.png")
        }
        else {
            $("nav").removeClass("white-nav-top")
            $(".navbar-brand img").attr("src", "./assets/img/logo-yellow.png")

        }
    }
});

// smoth scroll and add jquery easing 
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id like #about, #team, #work, #blog and etc.
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64

        }, 1250, "easeInOutExpo");
    });
});

// back to top
$(function () {
    $("#back-to-top").click(function () {
        $('html').animate({ scrollTop: 0 }, '500');
    })
    // back to top on window 
    $(window).scroll(function () {
        backBtn();
    });
    backBtn();
    function backBtn() {

        if ($(window).scrollTop() > 400) {
            $("a.btn-back-to-top").fadeIn();
        }
        else {
            $("a.btn-back-to-top").fadeOut();
        }
    }
});
/* ===================
  Animate
===================== */
// animate on scroll
$(function () {
    new WOW().init();
})
// window load animation home page
$(window).on("load", function () {
    $("#home-heading-1").addClass("animate__fadeInDown")
    $("#home-heading-2").addClass("animate__fadeInLeft")
    $("#home-text").addClass("animate__zoomIn")
    $(".home-btn").addClass("animate__zoomIn")
    $("a#angle-down i").addClass("animate__fadeInDown")
})