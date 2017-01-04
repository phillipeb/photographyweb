'use strict';


// var template = _.template("<div class='item'><img src='<%= obj.thumbs %>' /></div>", {attr : 'obj'});

$("a ['data-lightbox']").click( function(e) {
	e.preventDefault();
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
