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
    // BACKGROUND INTRO
    // ===============================
    var movementStrength = 25;
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
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['INTRO', 'SKILLS'],
    });

    // ===============================
    // FULL NAVIGATION
    // ===============================
    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $('#overlay').toggleClass('open');
    });
});
