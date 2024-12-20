AOS.init();
// aos

const spyEls = document.querySelectorAll(".scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
      triggerElement: spyEl,
      triggerHook: 0.8,
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
//section-animation

if (matchMedia("screen and (min-width: 1025px)").matches) {

  // head
  var link = document.createElement('link');
  link.href = 'https://unpkg.com/pageable@latest/dist/pageable.min.css';
  link.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(link);

  var script = document.createElement('script');
  link.src = 'https://unpkg.com/pageable@latest/dist/pageable.min.js';
  document.getElementsByTagName('head')[0].appendChild(script);

  // pageable 
  new Pageable("#container", {
    events: {
      mouse: false,
    },
  });

}
// page

var swiper = new Swiper(".projectSlide", {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
    },

  },
});
// project

var startDate = document.querySelector(".startDate");
var endDate = document.querySelector(".endDate");

// startDate.flatpickr({
//   disableMobile: "true",
//   dateFormat: "Y-m-d",
// });

// endDate.flatpickr({
//   disableMobile: "true",
//   dateFormat: "Y-m-d",
// });
// date

$(function () {
  $(window).on("load", function () {
    $("#loading").fadeOut(500);
  });
  // loading

  $(document).on("click", ".mobMenu", function () {
    $(".pg-pips").addClass("on");
    $(".mobClose").addClass("on");
  });

  $(document).on("click", ".mobClose", function () {
    $(".pg-pips").removeClass("on");
    $(".mobClose").removeClass("on");
  });
  // mobile-header

  $(document).on("click", ".btn_popup", function () {
    $("#pop_policy").addClass("on");
  });

  $(document).on("click", ".pop_close", function () {
    $("#pop_policy").removeClass("on");
  });
  // popup
  
});