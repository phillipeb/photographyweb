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
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite:false,
          slidesToShow: 5,
          slidesToScroll: 1,
          variableWidth:true,
          dots: false,
          infinite: true,
          arrows: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth:true,
          infinite: true,
          arrows:false

        }
      }
    ]
  });

  showSlides();
});

$(document).ready(function() {

  $('.answer').hide();
  
  $(".toggle").click(function(){
      $(".answer").not($(this).next()).hide("fast","linear");
      $("li[rel='profile_" + $(this).attr("profile") + "']").slideToggle("slow");
});
         
});


