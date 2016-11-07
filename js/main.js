$(document).ready(function(){
    // ===============================
    // TYPED
    // ===============================
    $("#typedString").typed({
        stringsElement: $('#toTypeString'),
        typeSpeed: 20,
        backDelay: 1000,
        showCursor: true,
        startDelay: 500
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
    // FULL PAGE
    // ===============================
    $("#fullpage").fullpage({
        anchors: ['intro', 'skills'],
        loopBottom: true,
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['INTRO', 'SKILLS'],
        scrollBar: true
    });

    // ===============================
    // FULL NAVIGATION
    // ===============================
    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $('#overlay').toggleClass('open');
    });

    // ===============================
    // SKILLS CIRCLE
    // ===============================
    // var vendorPrefAnim = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $('.grid').isotope({
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: 100
      }
    });

    $("#html").hover(function() {
        $("#html>#fill").animate({
            top: "30%" //<-- SET THE VALUE IN % LOWER VALUE MEANS HIGHER FILL
        }, 1500);
    });

    $("#sass").hover(function() {
        $("#sass>#fill").animate({
            top: "50%" //<-- SET THE VALUE IN % LOWER VALUE MEANS HIGHER FILL
        }, 1500);
    });

    $("#jquery").hover(function() {
        $("#jquery>#fill").animate({
            top: "60%" //<-- SET THE VALUE IN % LOWER VALUE MEANS HIGHER FILL
        }, 1500);
    });

    $("#js").hover(function() {
        $("#js>#fill").animate({
            top: "80%" //<-- SET THE VALUE IN % LOWER VALUE MEANS HIGHER FILL
        }, 1500);
    });

    $("#angular").hover(function() {
        $("#angular>#fill").animate({
            top: "90%" //<-- SET THE VALUE IN % LOWER VALUE MEANS HIGHER FILL
        }, 1500);
    });

    // ===============================
    // SCROLL DETECT
    // ===============================
    $(this).scroll(function () {
        var headerD = "#awesm-header-dark";
        var headerL = "#awesm-header-light";
        var y = $(this).scrollTop();
        if (y > 500) {
            $(headerD).addClass('animated fadeInLeftBig');
            $(headerL).addClass('animated fadeInRightBig');
        }
    });
});
