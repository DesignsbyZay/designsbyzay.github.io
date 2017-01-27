jQuery(document).ready(function($) {

    $(".slide .portfolio-nav .btn-info").click(function() {
        var that = $(this);
        var par = that.closest(".slide");
        par.find(".text-wrapper").toggleClass("active");
        par.find("img").toggleClass("active");
        that.toggleClass("active");
    })

    $(".fp-controlArrow").click(function(){
        $(".fp-controlArrow").addClass("intro");
    });

    $('#fullpage').fullpage({
        anchors: ['Welcome', 'About', 'Portfolio', 'Instagram'],
        sectionsColor: ['transparent', '#ffffff', '#f2f2f2', '#f2f2f2'],
        verticalCentered: true,
        css3:false,
        continuousVertical: true,
        slidesNavigation: true,
        touchSensitivity: 50,
        responsiveWidth: 767
    });

    $('a[data-rel^=lightcase]').lightcase({
        swipe: true,
        transitionIn: 'scrollBottom',
        maxWidth: '1366px',
    });

    $(document).on('click', '.enlarge', function(){
        $.fn.fullpage.setAllowScrolling(false);
    });

    $(document).on('click', '.turnScrollOn', function(){
        $.fn.fullpage.setAllowScrolling(true);
    });

    var feed = new Instafeed({
        clientId: '237094fcb1b84784b49e93a52f30dc6d',
        accessToken: '3230782367.1677ed0.eb1d8459f00840beb6db38b73eb4b25e',
        get: 'user',
        userId: 3230782367,
        resolution: 'standard_resolution',
        limit: '8'
    });
    feed.run();

    // enquire.register("screen and (max-width: 767px)", {
    //     match : function() {
    //     },
    //     unmatch : function() {
    //     }
    // });
});

