'use strict';


var opts = {
	dots: false,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 3,
	speed: 300,
	centerMode: false,
	variableWidth: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				infinite:true,
				slidesToShow: 3,
				slidesToScroll: 1,
				variableWidth:true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true
			}
		}
	]
};

$(document).ready(function() {

	$(".lightbox-thumbs a").click(function(e) {

		e.preventDefault();
		var carouselId = $(this).data('overlay-pointer');
		var hiddenCarousel = $("[data-overlay='" + carouselId + "']")
			.clone()
			.addClass('overlay-carousel');

		$('#fancyoverlay')
			.show()
			.html(
				hiddenCarousel.slick(opts)
			).prepend('<div id="fancyOverlay-large">');

		$('#fancyoverlay a').click(function(e) {

			e.preventDefault();
			var img = $(this).find('img');
			const largeSrc = img.attr('src').replace('thumbs', 'large');

			$('#fancyOverlay-large').html(
				$('<img>').attr('src', largeSrc)
			);
		});


	});
});
