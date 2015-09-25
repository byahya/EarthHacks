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
                time: new Date(2015, 10, 30, 12, 0, 0),
                css: 'success',
                content: 'Registration begins at Packard Atrium'
            }, {
                time: new Date(2015, 10, 30, 4, 0, 0),
                css: 'success',
                content: 'Arduino Workshop'
            }, {
                time: new Date(2015, 10, 30, 5, 0, 0),
                css: 'success',
                content: 'Make-a-Thon Kick-off'
            }, {
                time: new Date(2015, 10, 30, 7, 0, 0),
                css: 'success',
                content: 'Dinner is served.'
            }, {
                time: new Date(2015, 10, 31, 9, 0, 0),
                css: 'success',
                content: 'Breakfast is served.'
            }, {
                time: new Date(2015, 10, 31, 1, 0, 0),
                css: 'success',
                content: 'Lunch is served.'
            }, {
                time: new Date(2015, 10, 31, 4, 0, 0),
                css: 'success',
                content: 'Hacking ends.'
            }, {
                time: new Date(2015, 10, 31, 5, 0, 0),
                css: 'success',
                content: 'Judging begins.'
            }, {
                time: new Date(2015, 10, 31, 5, 30, 0),
                css: 'success',
                content: 'Awards and Closing Ceremony.'
            }
        ]
    });
// });
})(jQuery);
