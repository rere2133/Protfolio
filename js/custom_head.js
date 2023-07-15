(function ($) {

  "use strict";
  if (!$) {
    return;
  }

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })
  // HEADER
  $(".navbar").headroom();

  // // PROJECT CAROUSEL
  // $('.owl-carousel').owlCarousel({
  //   items: 1,
  //   loop: true,
  //   margin: 10,
  //   nav: true
  // });


  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 800);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  $(function () {
    $('.back-btn').on('click', function(e) {
      console.log('click back');
      // e.preventDefault(); // 防止預設的按鈕行為（例如提交表單）
      window.location.href = `./index.html${$(this).attr('href')}`;
      e.preventDefault();
    });
  });


})(jQuery);
