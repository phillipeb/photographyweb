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

var template = _.template($('#fancyOverlay-template').html(), { variable : 'obj' });
var showLargeImage = function(clickedLink) {
	if (!clickedLink || ($(clickedLink).find('img').length === 0)) {
		console.warn('no image found, cannot show large image.');
		return;
	};
	var largeSrc = $(clickedLink).find('img').attr('src').replace('thumbs', 'large');

	$('#fancyOverlay-large').html(
		$('<img>').attr('src', largeSrc)
	);
};

$(document).ready(function() {

	$(".lightbox-thumbs a").click(function(e) {
		e.preventDefault();
		var carouselId = $(this).data('overlay-pointer');
		var hiddenCarousel = $("[data-overlay='" + carouselId + "']")
			.clone()
			.addClass('overlay-carousel');

		if (!hiddenCarousel[0]) {
			console.warn('no carousel found, cannot show large image.');
			return;
		};
		$('#fancyoverlay')
			.empty() // empty the overlay before putting more stuff into it
			.show() // show it (it's hidden)
			.html(template({
				carouselHtml : hiddenCarousel[0] && hiddenCarousel[0].outerHTML
			}))// fill it with the slick carousel created above
			.find('.overlay-carousel')
			.slick(opts); // invoke the slick carousel on the carousel html in there

		// set up click event to populate the large size image when user clicks the carousel
		$('#fancyoverlay a').click(function(e) {
			e.preventDefault();
			showLargeImage(this);
		});

		// set up click event for "x" button to empty out the fancy overlay box :
		$('#fancyoverlay .close-button').click(function () {
			$('#fancyoverlay').empty().hide();
		});

		// show the first of the large images :
		showLargeImage($('#fancyoverlay a')[0]);
	});
});
