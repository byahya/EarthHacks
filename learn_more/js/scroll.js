/**
 * JQuery Start Script
 */
$(function(){
	console.log("Hello?");
	Scroll.init();
});

/**
 * Scroll Script
 */
Scroll = {
	init: function() {
		$('.scroll').click(function(e) {
			e.preventDefault();
			console.log("Hello?")
			var arr = $(this).attr('href').split('#');
			if (arr[1]) {
				var section = arr[1];
				Scroll.scroll(section);
			}
		});
	},
	scroll: function(section) {
		$('html, body').animate({
			scrollTop: $("#" + section).offset().top - 80
		}, 500);
	}
}