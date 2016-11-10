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
    $("#top-image").mousemove(function(e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#top-image').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });

    // ===============================
    // FULL PAGE JS
    // ===============================
    $("#fullpage").fullpage({
        anchors: ['intro', 'skills'],
        loopBottom: true,
        scrollBar: true,
        // verticalCentered: false,
        normalScrollElements: '#skills-section',
        afterLoad: function(anchorLink) {
            if (anchorLink == "skills") {
                var $skillCircleChildren = $(".skills-grid").children();
                $("#awesm-header-dark").addClass('animated fadeInLeftBig');
                $("#awesm-header-light").addClass('animated fadeInRightBig');
                $skillCircleChildren.addClass('animated bounceIn');
            }
        },
    });

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
            $(this).children().animate({
                top: val //<-- SET THE VALUE IN % LOWER VALUE MEANS HIGHER FILL
            }, 1500);
        });
    };

    skillHover("#html", "30%");
    skillHover("#sass", "50%");
    skillHover("#jquery", "80%");
    skillHover("#js", "80%");
    skillHover("#android", "70%");
    skillHover("#git", "50%");
    skillHover("#java", "80%");
    skillHover("#angular", "90%");
    skillHover("#ai", "40%");
    skillHover("#ps", "40%");
    skillHover("#php", "30%");
    skillHover("#mysql", "70%");

});
