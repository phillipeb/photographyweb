'use strict';


var template = _.template("<div class='item'><img src='<%= obj.thumbs %>' /></div>", {attr : 'obj'});

$(".lightbox-thumbs a").click(function(e) {
	debugger;

	e.preventDefault();
	var carouselId = $(this).data('lightbox');


	debugger;

	$('#fancyoverlay').html();

});
