'use strict';


var template = _.template("<div class='item'><img src='<%= obj.thumbs %>' /></div>", {attr : 'obj'});
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
		var hiddenCarousel = $("[data-overlay='" + carouselId + "']").clone();

		$('#fancyoverlay')
			.show()
			.html(
				hiddenCarousel.slick(opts)
			);

		$('#fancyoverlay a').click(function(e) {
			e.preventDefault();
		});

	});
});
