$(document).ready(function () {

   // header
   $('.ri-menu-2-line').click(function () {
      $('.ri-menu-2-line').toggleClass('d-none');
      $('.ri-arrow-right-line').toggleClass('d-block');
   });
   $('.ri-arrow-right-line').click(function () {
      $('.ri-arrow-right-line').toggleClass('d-block');
      $('.ri-menu-2-line').toggleClass('d-none');
      $('aside').toggleClass('w-70');
      $('header').toggleClass('ml-70');
      $('.logo').toggleClass('d-none');
      $('.logo-1').toggleClass('d-block');
      $('.side-title').toggleClass('d-none');
      $('.nav-menu span').toggleClass('d-none');
      $('.ri-subtract-line').toggleClass('d-none');
      $('.ri-arrow-up-s-line').toggleClass('d-none');
   });

   // us-svg
   $('.us-svg').click(function () {
      $('.head-right-dropdown').toggle();
      $('.head-right-dropdown1').hide();
      $('.head-right-dropdown2').hide();
      $('.founder-dropdown').hide();
   });

   // layout
   $('.layout').click(function () {
      $('.head-right-dropdown1').toggle();
      $('.head-right-dropdown').hide();
      $('.head-right-dropdown2').hide();
      $('.founder-dropdown').hide();
   });

   // shopping-bag
   $('.shopping-bag').click(function () {
      $('.head-right-dropdown2').toggle();
      $('.head-right-dropdown').hide();
      $('.head-right-dropdown1').hide();
      $('.founder-dropdown').hide();
   });

   //fullscreen
   $('.ri-fullscreen-fill').click(function () {
      $('.ri-fullscreen-exit-line').show();
      $('.ri-fullscreen-fill').hide();
      $('.head-right-dropdown2').hide();
      $('.head-right-dropdown').hide();
      $('.head-right-dropdown1').hide();
   });

   $('.ri-fullscreen-exit-line').click(function () {
      $('.ri-fullscreen-fill').show();
      $('.ri-fullscreen-exit-line').hide();
      $('.head-right-dropdown2').hide();
      $('.head-right-dropdown').hide();
      $('.head-right-dropdown1').hide();
   });

   function toggleFullscreen(elem) {
      elem = elem || document.documentElement;
      if (!document.fullscreenElement && !document.mozFullScreenElement &&
         !document.webkitFullscreenElement && !document.msFullscreenElement) {
         if (elem.requestFullscreen) {
            elem.requestFullscreen();
         } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
         } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
         } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
      } else {
         if (document.exitFullscreen) {
            document.exitFullscreen();
         } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
         } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
         } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
         }
      }
   }

   document.getElementById('btnFullscreen').addEventListener('click', function () {
      toggleFullscreen();
   });

   document.getElementById('exampleImage').addEventListener('click', function () {
      toggleFullscreen(this);
   });

   //mode
   $(".ri-moon-line").click(function () {
      $(".ri-moon-line").hide();
      $(".ri-sun-line").show();
      $(":root").css("--menu-primary", "#212529");
      $(":root").css("--header-item-sub-color", "rgba(0, 0, 0, 0.888)");
      $(":root").css("--btn-bg", "rgba(43, 43, 43, 0.716)");
      $(":root").css("--grid-color", "#212529");
      $(":root").css("--main-heading-color", "#dff0fa");
      $(":root").css("--header-bg", "#212529");
      $(":root").css("--border-color", "gray");
      $('.head-right-dropdown2').hide();
      $('.head-right-dropdown').hide();
      $('.head-right-dropdown1').hide();
   });
   $(".ri-sun-line").click(function () {
      $(".ri-moon-line").show();
      $(".ri-sun-line").hide();
      $(":root").css("--menu-primary", "#405189");
      $(":root").css("--header-item-sub-color", "#e5e5f2");
      $(":root").css("--btn-bg", "#dff0fa");
      $(":root").css("--grid-color", "rgba(255, 255, 255, 0.959)");
      $(":root").css("--main-heading-color", "#495057");
      $(":root").css("--header-bg", "#ffffff");
      $(":root").css("--border-color", "#e9ebec");
      $('.head-right-dropdown2').hide();
      $('.head-right-dropdown').hide();
      $('.head-right-dropdown1').hide();
   });

   // founder
   $('.founder').click(function () {
      $('.founder-dropdown').toggle();
      $('.head-right-dropdown2').hide();
      $('.head-right-dropdown').hide();
      $('.head-right-dropdown1').hide();
   });
   // aside
   $('.ri-menu-2-line').click(function () {
      $('aside').toggleClass('w-70');
      $('header').toggleClass('ml-70');
      $('.logo').toggleClass('d-none');
      $('.logo-1').toggleClass('d-block');
      $('.side-title').toggleClass('d-none');
      $('.nav-menu span').toggleClass('d-none');
      $('.ri-subtract-line').toggleClass('d-none');
      $('.ri-arrow-up-s-line').toggleClass('d-none');
      $('.nav-menu i').css("fontSize", "22px");
      $('.nav-menu i').css("margin", "2px 8px");
   });
   
   // sidebar menu & arrow
   $('.nav-link').click(function () {
      $(this).next('.menu-dropdown').toggle(900);
      $('.menu-dropdown').not($(this).next()).slideUp();
      $(this).find('.ri-arrow-up-s-line').toggleClass('d-none');
      $(this).find('.ri-arrow-down-s-line').toggleClass('d-block');

  });

   // main start
   $('.ri-menu-2-line').click(function () {
      $('main').toggleClass('ml-70');
   });

   $('.ri-arrow-right-line').click(function () {
      $('main').toggleClass('ml-70');
   });

   // best-selling
   $('.best-selling .nav-link').click(function () {
      $('.menu-dropdown5').toggleClass('d-block');
   });
   
   // top-sellers
   $('.top-sellers .nav-link').click(function () {
      $('.menu-dropdown6').toggleClass('d-block');
   });

   // reports
   $('.reports .nav-link').click(function () {
      $('.menu-dropdown4').toggleClass('d-block');
   });

   // top-button
   var $backToTop = $("#button");
   $backToTop.hide();
   
   $(window).on('scroll', function() {
     if ($(this).scrollTop() > 100) {
       $backToTop.fadeIn();
     } else {
       $backToTop.fadeOut();
     }
   });
   
   $backToTop.on('click', function(e) {
     $("html, body").animate({scrollTop: 0}, 500);
   });

   // footer
   $('.ri-menu-2-line').click(function () {
      $('footer').toggleClass('ml-70');
   });

   $('.ri-arrow-right-line').click(function () {
      $('footer').toggleClass('ml-70');
   });
});