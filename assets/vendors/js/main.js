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
    rtl: true,
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
    rtl: true,
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
    rtl:true,
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
    rtl: true,
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
    rtl: true,
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
