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
			.addClass('overlay-carousel')
			.slick(opts);

		$('#fancyoverlay')
			.empty() // empty the overlay before putting more stuff into it
			.show() // show it (it's hidden)
			.html(hiddenCarousel) // fill it with the slick carousel created above
			.prepend('<div id="fancyOverlay-large">'); // add empty container for the large size image

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
