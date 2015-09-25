(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global:		{ range: '*', href: 'css/style.css', containers: '75em', grid: { gutters: ['3em', 0] } },
			wide:		{ range: '-1680', href: 'css/style-wide.css', grid: { gutters: [ '2.5em', 0] } },
			normal:		{ range: '-1280', href: 'css/style-normal.css', containers: '65em', grid: { gutters: ['2em', 0] }, viewport: { scalable: false } },
			narrow:		{ range: '-980', href: 'css/style-narrow.css', containers: '90%' },
			narrower:	{ range: '-840', href: 'css/style-narrower.css', containers: '90%!', grid: { collapse: true } },
			mobile:		{ range: '-736', href: 'css/style-mobile.css', containers: '100%!' },
			mobilep:	{ range: '-480', href: 'css/style-mobilep.css' }
		},
		plugins: {
			layers: {

				// Config.
				config: {
					mode: function() { return (skel.vars.isMobile ? 'transform' : 'position'); }
				},

				// Navigation Panel.
					navPanel: {
						animation: 'pushX',
						breakpoints: 'narrower',
						clickToHide: true,
						height: '100%',
						hidden: true,
						html: '<div data-action="navList" data-args="nav"></div>',
						orientation: 'vertical',
						position: 'top-left',
						side: 'left',
						width: 250
					},

				// Navigation Button.
					navButton: {
						breakpoints: 'narrower',
						height: '4em',
						html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
						position: 'top-left',
						side: 'top',
						width: '6em'
					}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'center'
			});

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.isMobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		1,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});
				});
			}

	});

})(jQuery);