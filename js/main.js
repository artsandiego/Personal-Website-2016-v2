$(document).ready(function() {
    // ===============================
    // TYPED
    // ===============================
    $("#typedString").typed({
        stringsElement: $('#toTypeString'),
        typeSpeed: 10,
        backDelay: 600,
        showCursor: true,
        startDelay: 100,
        callback: function(){
            $("#scroll-indicator").animate({opacity: 1}, 1000);
        }
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
        fitToSection: false,
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
    var skillHover = function(elem, fill) {
        var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
        var lvl = 100 - fill;
        $(elem).click(function(event) {
            //LEVEL
            $(this).children('.level').animate({
                top: fill+"%",
            }, 1500);
            $(this).find('.level > .level-value').animateNumber({
                number: lvl+"%",
                numberStep: percent_number_step
            }, 1500);
        });
        $(elem).hover(function() {
            //SHADE
            $(this).children('.fill').animate({
                top: '100%'
            }, 500);
        }, function() {
            //SHADE
            $(this).children('.fill').animate({
                top: '0%'
            }, 500);
        });
    };

    var interests = function(elem){
        $(elem).click(function(event) {
            $(this).children('.desc').animate({
                top: '0%'
            }, 500);
        });
    };

    skillHover("#jquery-container", 50); //<-- 100 - the value = the % of level value, the value = height of level
    skillHover("#html-container", 10);
    skillHover("#sass-container", 50);
    skillHover("#js-container", 70);
    skillHover("#android-container", 80);
    skillHover("#git-container", 40);
    skillHover("#java-container", 80);
    skillHover("#angular-container", 90);
    skillHover("#ai-container", 40);
    skillHover("#ps-container", 50);
    skillHover("#php-container", 40);
    skillHover("#mysql-container", 50);
    skillHover("#cordova-container");
    skillHover("#swift-container");
    skillHover("#laravel-container");

    interests("#cordova-container");
    interests("#swift-container");
    interests("#laravel-container");

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
