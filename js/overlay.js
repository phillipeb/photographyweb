'use strict';


var template = _.template("<div class='item'><img src='<%= obj.thumbs %>' /></div>", {attr : 'obj'});

$("a.lightbox-thumb").click( function(e) {
	e.preventDefault();

	var carouselId = $(this).data('lightbox');
	debugger;



	$('#fancyoverlay').html();

});
