$(document).ready(function() {
    // ===============================
    // TYPED
    // ===============================
    $('#typedString').typed({
        stringsElement: $('#toTypeString'),
        typeSpeed: 15,
        backDelay: 1000,
        showCursor: true,
        startDelay: 500,
        callback: function() {
            $('#scroll-indicator').animate({
                opacity: 1
            }, 1000);
        }
    });

    // ===============================
    // MOVING BACKGROUND
    // ===============================
    var movementStrength = 35;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $('.top-image').mousemove(function(e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.top-image').css('background-position', newvalueX + 'px     ' + newvalueY + 'px');
    });

    // ===============================
    // FULL PAGE JS
    // ===============================
    $('#fullpage').fullpage({
        anchors: ['intro', 'skills', 'projects'],
        fitToSection: true,
        loopBottom: true,
        scrollBar: true,
        // verticalCentered: false,
        normalScrollElements: '.skills-grid, .skills-mobile',
        afterLoad: function(anchorLink) {
            if (anchorLink == 'skills') {
                var $skillGridChildren = $('.skills-grid').children();
                $('.awesm-header-dark').addClass('animated fadeInLeftBig');
                $skillGridChildren.addClass('animated bounceIn');
                //HEADER HIDE DIV AFTER 5 SECONDS
                setTimeout(function() {
                    $('.awesm-header-dark').removeClass('fadeInLeftBig');
                    $('.awesm-header-dark').addClass('fadeOutLeftBig');
                }, 5000);
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
    $('#toggle').click(function() {
        $(this).toggleClass('active');
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
    var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
    // =WEB========================
    var webSkills = function(elem, fill) {
        var levelValue = 100 - fill;
        //CLICK
        $(elem).click(function(event) {
            //LEVEL
            $(this).children('.level').animate({
                top: fill + '%',
            }, 1000);
            $(this).find('.level > .level-value').animateNumber({
                number: levelValue + '%',
                numberStep: percent_number_step
            }, 1000);
            //DESCRIPTION FOR INTERESTS
            $(this).children('.desc').animate({
                top: '0%'
            }, 500);
        });
        //HOVERED
        $(elem).mouseleave(function(event) {
            //LEVEL
            $(this).children('.level').animate({
                top: '115%'
            }, 1000);
            $(this).find('.level > .level-value').animateNumber({
                number: '0%',
                numberStep: percent_number_step
            }, 1000);
            //DESCRIPTION FOR INTERESTS
            $(this).children('.desc').animate({
                top: '-100%'
            }, 500);
        });
    };
    // =MOBILE========================
    var mobileSkills = function(elem, val) {
        $(elem).hover(function() {
            $(this).find('.mobile-fill').animate({
                width: val + '%'
            }, 1500);
        });
    };
    //html sass jquery js angular git php mysql android java ai ps
    var mLvl = [90, 60, 60, 30, 10, 60, 60, 50, 30, 20, 60, 50]; //<- THESE VALUES WILL DIRECTLY BE PUSHED ON MOBILESKILLS
    var wLvl = []; //<- VALUES HERE WILL BE THE VALUE OF WLVL
    mLvl.forEach(lvlVal);
    function lvlVal(element, index, array){
        var newElement = 100 - element; //VALUES FROM WLVL WILL BE SUBTRACTED TO 100
        wLvl.push(newElement); //ANSWERS WILL THEN BE PUSHED TO MLVL
    }

    // =WEB===============================
    webSkills('#html-container',    wLvl[0]);
    webSkills('#sass-container',    wLvl[1]);
    webSkills('#jquery-container',  wLvl[2]);
    webSkills('#js-container',      wLvl[3]);
    webSkills('#angular-container', wLvl[4]);
    webSkills('#git-container',     wLvl[5]);
    webSkills('#php-container',     wLvl[6]);
    webSkills('#mysql-container',   wLvl[7]);
    webSkills('#android-container', wLvl[8]);
    webSkills('#java-container',    wLvl[9]);
    webSkills('#ai-container',      wLvl[10]);
    webSkills('#ps-container',      wLvl[11]);
    webSkills('#cordova-container');
    webSkills('#laravel-container');
    webSkills('#swift-container');
    // =MOBILE===============================
    mobileSkills('#html-mobile',    mLvl[0]);
    mobileSkills('#sass-mobile',    mLvl[1]);
    mobileSkills('#jquery-mobile',  mLvl[2]);
    mobileSkills('#js-mobile',      mLvl[3]);
    mobileSkills('#angular-mobile', mLvl[4]);
    mobileSkills('#git-mobile',     mLvl[5]);
    mobileSkills('#php-mobile',     mLvl[6]);
    mobileSkills('#mysql-mobile',   mLvl[7]);
    mobileSkills('#android-mobile', mLvl[8]);
    mobileSkills('#java-mobile',    mLvl[9]);
    mobileSkills('#ai-mobile',      mLvl[10]);
    mobileSkills('#ps-mobile',      mLvl[11]);

    // ===============================
    // CHECK WINDOW SIZE
    // ===============================
    //CHECK WINDOW SIZE
    var $windowSize = $(window).width();
    var isSizeChanged = function() {
        // var display = ($windowSize < 500) ? "none" : "inherit";
        if ($windowSize < 500) {
            $('.skills-grid').css('display', 'none');
            $('.skills-mobile').css('display', 'inherit');
        } else {
            $('.skills-grid').css('display', 'inherit');
            $('.skills-mobile').css('display', 'none');
        }
    };
    //CHECK WIDTH AFTER REFRESHING
    isSizeChanged();
    //CHECK WIDTH UPON RESIZING
    $(window).resize(function() {
        $windowSize = $(window).width();
        isSizeChanged();
    });
});
