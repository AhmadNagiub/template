$(window).scroll(function () {
  $('header').toggleClass('scrolled', $(this).scrollTop() > 100)
})

jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000,
  })
})
$('.slides').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
  nav: true,
  navSpeed: 500,
  autoplayHoverPause: true, // Stops autoplay
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
})
$('#owll').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
  nav: true,
    rtl: false,
  navSpeed: 500,
  autoplayHoverPause: true, // Stops autoplay
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
})
$('#owl-c').owlCarousel({
    loop: false,
  margin: 10,
  autoplay: true,
  dots: false,
  nav: true,
  navSpeed: 500,
  autoplayHoverPause: true, // Stops autoplay
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
})
$('#owl-carousel2').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: false,
  dots: false,
  nav: true,
  navSpeed: 500,
  autoplayHoverPause: true, // Stops autoplay
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
})

$('#search_name').click(function () {
  $('#FiltersBox').toggle('slow')
})

var btn = $('.up2')

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show')
  } else {
    btn.removeClass('show')
  }
})

$('#owll2').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
    nav: true,
    rtl: false,
  navSpeed: 500,
  autoplayHoverPause: true, // Stops autoplay
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
})


const btn11 = document.querySelector(".switch-btn");
const video = document.querySelector(".bg-video-wrap video");

btn11.addEventListener("click", function () {
  console.log('sd')
  if (!btn11.classList.contains("slide")) {
    btn11.classList.add("slide");
    video.pause();
  } else {
    btn11.classList.remove("slide");
    video.play();
  }
});

let Stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .number");
let isStarted = false;
window.onscroll = function () {
  // increase Stats
  if(window.scrollY >= Stats.offsetTop -300 ){
      if(!isStarted){
        console.log('sd ')
          numbers.forEach((number) => StartCount(number));
      }
      isStarted = true;
  }

}
///////////////////////////////////////////////////////// Animate with scroll to increase States section /////////////////////////////////////////////////////
function StartCount(element){
  let goal = element.dataset.goal;
  let time = 2000/goal
  let counter = setInterval(()=>{
      element.textContent++;
      if(element.textContent == goal){
          clearInterval(counter)
      }
  
  },time)
}