  //Image Slider

//Slide Menu Nav
var menu       = $(".menu"),
    toggle     = $(".nav-toggle");

function toggleThatNav() {
  if (menu.hasClass("show-nav")) {
    if (!Modernizr.csstransforms) {
      menu.removeClass("show-nav");
      toggle.removeClass("show-nav");
      menu.animate({
        right: "-=500"
      }, 500, "linear");
    } else {
      menu.removeClass("show-nav");
      toggle.removeClass("show-nav");
    }

  } else {
    if (!Modernizr.csstransforms) {
      menu.addClass("show-nav");
      toggle.addClass("show-nav");
      menu.css("right", "0px");
      toggle.css("right", "330px");
    } else {
      menu.addClass("show-nav");
      toggle.addClass("show-nav");
    }

  }
}

$(function() {
  $(document).on("click", ".nav-toggle", function(e) {
    e.stopPropagation();
    e.preventDefault();
    toggleThatNav();
  });
});



//Services and Direction Image Section
var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex> slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "list-item";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
};


$(document).ready(function(){
  $('.variable-width').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite:true,
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth:true,
          dots: false,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth:true,
          infinite: true
        }
      }
    ]
  });

  showSlides();
});

