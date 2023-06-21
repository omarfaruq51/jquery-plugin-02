
initParalaxBg();
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
$(document).ready(function () {
    var circle = function (t)
{
    return {
        x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * -t + 0.5 * Math.PI),
        y: 500.0 + 300.0 * Math.sin(2.0 * Math.PI * -t + 0.5 * Math.PI)
    };
};

$('#text2').curvedText({
    curve:    circle,
    domain:   [0.0, 1.0],
    viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 1000.0 }
});

$('.js-tilt').tilt({
    glare: true,
    maxGlare: .5
});
$('.js-preloader').preloadinator({
    animation: 'fadeOut',
    animationDuration: 500,
    minTime: 1000
  });
})

// owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        lazyLoad:true,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        animateOut:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            576:{
                items:2,
                margin:30,
                nav:true,
            },
            768:{
                items:3,
                nav:true,
            },
            1000:{
                items:4,
                nav:true,
            }
        }
      
    });

    $('#nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#second').parallax("50%", 0.1);
	$('.bg').parallax("50%", 0.4);
	$('#third').parallax("50%", 0.3);
  });
  wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
  wow.init();
  document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
  };