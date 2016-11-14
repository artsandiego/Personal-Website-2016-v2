$(document).ready(function() {
    // ===============================
    // TYPED
    // ===============================
    $("#typedString").typed({
        stringsElement: $('#toTypeString'),
        typeSpeed: 10,
        backDelay: 700,
        showCursor: true,
        startDelay: 100
    });

    // ===============================
    // MOVING BACKGROUND
    // ===============================
    var movementStrength = 35;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $(".top-image").mousemove(function(e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.top-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });

    // ===============================
    // FULL PAGE JS
    // ===============================
    $("#fullpage").fullpage({
        anchors: ['intro', 'skills'],
        loopBottom: true,
        scrollBar: true,
        // verticalCentered: false,
        normalScrollElements: '#skills-section-content',
        afterLoad: function(anchorLink) {
            if (anchorLink == "skills") {
                var $skillGridChildren = $(".skills-grid").children();
                $(".awesm-header-dark").addClass('animated fadeInLeftBig');
                $skillGridChildren.addClass('animated bounceIn');
                //HEADER ON HIDE DIVE AFTER 5 SECONDS
                setTimeout(function() {
                    $('.awesm-header-dark').removeClass('fadeInLeftBig');
                    $('.awesm-header-dark').addClass('fadeOutLeftBig');
                }, 6000);
            }
        },
    });

    // ===============================
    // WOW JS
    // ===============================
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 10,
        mobile: true,
        live: true
    });
    wow.init();


    // ===============================
    // FULL PAGE NAVIGATION
    // ===============================
    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $('#overlay').toggleClass('open');
    });

    // ===============================
    // ISOTOPE
    // ===============================
    $('.skills-grid').isotope({
        itemSelector: '.skills-grid-item',
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
            columnWidth: '.percentPosition'
        }
    });

    // ===============================
    // SKILLS FILL
    // ===============================
    var skillHover = function(elem, val) {
        $(elem).hover(function() {
            $(this).children('.fill').animate({
                top: '100%'
            }, 500);
        }, function() {
            $(this).children('.fill').animate({
                top: '0%'
            }, 500);
        });
    };

    skillHover("#jquery-container");
    skillHover("#html-container");
    skillHover("#sass-container");
    skillHover("#js-container");
    skillHover("#android-container");
    skillHover("#git-container");
    skillHover("#java-container");
    skillHover("#angular-container");
    skillHover("#ai-container");
    skillHover("#ps-container");
    skillHover("#php-container");
    skillHover("#mysql-container");
    skillHover("#cordova-container");
    skillHover("#swift-container");
    skillHover("#laravel-container");

    // ===============================
    // CHECK WINDOW SIZE
    // ===============================
    //CHECK WINDOW SIZE
    var $windowSize = $(window).width();
    var isSizeChanged = function() {
        var display = ($windowSize < 500) ? "none" : "inherit";
        $(".skills-grid").css('display', display);
    };
    //CHECK WIDTH UPON refresh
    isSizeChanged();
    //CHECK WIDTH UPON RESIZING
    $(window).resize(function() {
        $windowSize = $(window).width();
        isSizeChanged();
    });
});

// ===============================
// SCROLL DETECT
// ===============================
// var vendorPrefAnim = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
// $skillCircleChildren.one(vendorPrefAnim, function(){
//     $skillCircleChildren.removeClass('animated bounceIn');
// });
//
// $(this).scroll(function () {
//     var $y = $(this).topScroll();
//     if ($y > 500) {
//     }
// });
