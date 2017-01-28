'use strict';


var opts = {
	dots: false,
	infinite: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 300,
	centerMode: false,
	variableWidth: true,
	arrows: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				infinite:false,
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth:true,
				dots: false,
				arrows:true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:true,
				
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: true,
				arrows: true
			}
		}
	]
};

var template = _.template($('#fancyOverlay-template').html(), { variable : 'obj' });
var showLargeImage = function(clickedLink) {
	if (!clickedLink || ($(clickedLink).find('img').length === 0)) {
		console.warn('no image found, cannot show large image.');
		closeOverlay();
		return;
	};

	var largeSrc = $(clickedLink).find('img').attr('src').replace('thumbs', 'large');

	$('#fancyOverlay-large').html(
		$('<img>').attr('src', largeSrc)
	);
};
var populateOverlay = function (hiddenCarousel) {
	if (!hiddenCarousel[0]) {
		console.warn('no carousel found, cannot show large image.');
		closeOverlay();
		return;
	};

	$('body').css('overflow', 'hidden');
	$('#fancyoverlay-bg').show();
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
		closeOverlay();
	});
};

var closeOverlay = function () {
	$('body').css('overflow', 'auto');
	$('#fancyoverlay-bg').hide();
	$('#fancyoverlay').empty().hide();
};

$(document).ready(function() {

	$(".lightbox-thumbs a").click(function(e) {
		e.preventDefault();
		var carouselId = $(this).data('overlay-pointer');
		var hiddenCarousel = $("[data-overlay='" + carouselId + "']")
			.clone()
			.addClass('overlay-carousel');

		populateOverlay(hiddenCarousel);
		// show the first of the large images :
		showLargeImage($('#fancyoverlay a')[0]);
	});

	$(document).keypress(function(e){
		if(e.which == 27){
			closeOverlay();
		}
	});
});
