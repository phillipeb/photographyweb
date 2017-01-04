'use strict';


// var owlArray = [{
// 	large:"/images/ACCESSORIES-STILL/INSTYLE15/large/1.jpg",
// 	thumbs:"/images/ACCESSORIES-STILL/INSTYLE15/thumbs/1.jpg"
// }, {
// 	large:"/images/ACCESSORIES-STILL/TEENVOGUE/large/1.jpg",
// 	thumbs:"/images/ACCESSORIES-STILL/TEENVOGUE/thumbs/1.jpg"
// }];


/**
 * 1. on click of an image, grab json attribute off of a tag.
 * @type {Function}
 */



// todo : make this template funciton work
var template = _.template("<div class='item'><img src='<%= obj.thumbs %>' /></div>", {attr : 'obj'});

$(".shmerds").click( function(e) {
	e.preventDefault();
	// var jsonPath = $(this).data("json");
	// debugger;
	owlArray.forEach(function(content) {
		var html = template(content)
		$("#fancyoverlay").append(html);
	});

	// basically:
	// overlay hidden
	// show then .append() to overlay
	// for unique array.
	// call owl carousel to fit template
	//for ajax yet to come:

	$.ajax({
		url: "/json/",
		dataType : "json",
		beforeSend : function () {
			// todo : create a spinny wheel here to wait for your request
		},
		success : function(data, status, xhr) {
			debugger;
			console.log(data);
			data.forEach(function(obj) {
				var html = ''; // todo : here create html from your template // call the template function here
				$.append; // todo :: append the html that your template generated to the DOM here.
			});
		},
		error : function() {
			console.log("fuck you");
		}
	});

});
