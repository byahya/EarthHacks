(function($) {
// $("document").ready(function() {
    // function e() {
    //     var e = $(window).height();
    //     $(".slidepage").css("min-height", e), $(".vertical-center").css("margin-top", e / 2)
    // }
    // $("body").scrollspy({
    //     target: ".navigation"
    // });
    // var t = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1;
    // t && (e(), $(window).bind("resize", e)), $(".scroll").click(function(e) {
    //     e.preventDefault();
    //     var t = $(this).attr("href").split("#");
    //     if (t[1]) {
    //         var a = t[1];
    //         $("html, body").animate({
    //             scrollTop: $("#" + a).offset().top
    //         }, 1e3)
    //     }
    //     $(".visible-xs").is(":visible") && $(".navigation").is(":visible") && $("#menuswitcher").click()
    // }), $("#menuswitcher").click(function(e) {
    //     e.preventDefault();
    //     var t = $(".navigation"),
    //         a = $("#menuswitcher span"),
    //         i = $("#menu");
    //     t.is(":visible") ? (t.animate({
    //         height: "toggle"
    //     }, {
    //         duration: 300
    //     }), a.removeClass("fa-times"), a.addClass("fa-bars"), i.removeClass("solid-background")) : (a.removeClass("fa-bars"), a.addClass("fa-times"), i.addClass("solid-background"), t.animate({
    //         height: "toggle"
    //     }, {
    //         duration: 300
    //     }))
    // }), $("#gallery-container").css({
    //     visibility: "visible"
    // });

    // var i = new WOW({
    //     mobile: !1,
    //     live: !0
    // });

    /**
     * Schedule Configuration
     */
    $("#schedule").timeline({
        data: [
            {
                time: new Date(2015, 4, 23, 9, 0, 0),
                css: 'success',
                content: 'Check in opens at Packard Atrium.'
            }, {
                time: new Date(2015, 4, 23, 10, 0, 0),
                css: 'success',
                content: 'Hacking begins.'
            }, {
                time: new Date(2015, 4, 23, 12, 30, 0),
                css: 'success',
                content: 'Lunch is served.'
            }, {
                time: new Date(2015, 4, 23, 13, 0, 0),
                css: 'success',
                content: 'Hacking continues.'
            }, {
                time: new Date(2015, 4, 23, 17, 30, 0),
                css: 'success',
                content: 'Dinner is served.'
            }, {
                time: new Date(2015, 4, 23, 22, 0, 0),
                css: 'success',
                content: 'Hacking ends.'
            }, {
                time: new Date(2015, 4, 23, 22, 0, 0),
                css: 'success',
                content: 'Presentations and Awards Ceremony.'
            }
        ]
    });
// });
})(jQuery);
