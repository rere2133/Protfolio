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
  $(document).ready(function() {
    var navbar = $('.navbar');
    var navbarCollapse = navbar.find('.navbar-collapse');
  
    $(document).on('show.bs.collapse', '.navbar-collapse', function() {
      var headroomTop = navbar.closest('.headroom--top');
      if (headroomTop.length > 0) {
        navbar.css('background-color', '#2228');
      }
    });
  
    $(document).on('hide.bs.collapse', '.navbar-collapse', function() {
      var headroomTop = navbar.closest('.headroom--top');
      if (headroomTop.length > 0) {
        navbar.css('background-color', 'transparent');
      }else{
        navbar.css('background-color', '#fff');
      }
    });
  
  });
  $(document).ready(function() {
    var navbar = $('.navbar');
    var navbarCollapse = navbar.find('.navbar-collapse');
  
    $(window).on('scroll', function() {
      var siblingsCollapseShow = navbarCollapse.closest('.show');
      if ($(window).scrollTop() === 0) {
        navbar.css('background-color', 'transparent');
      } else {
        navbar.css('background-color', '#fff');
      }
      if (siblingsCollapseShow.length > 0) {
        navbarCollapse.removeClass('show');
      }
    });

    // var navbar = $('.navbar');
    // var navbarCollapse = navbar.find('.navbar-collapse');
  
    // $(window).on('scroll', function() {
    //   var siblingsTop = navbar.closest('.headroom--top');
    //   var siblingsNotTop = navbar.closest('.headroom--not-top');
    //   var siblingsCollapseShow = navbarCollapse.closest('.show');
  
    //   if (siblingsTop.length > 0) {
    //     navbar.css('background-color', 'transparent');
    //   } else if (siblingsNotTop.length > 0) {
    //     navbar.css('background-color', '#fff');
    //   }
  
    //   if (siblingsCollapseShow.length > 0) {
    //     navbarCollapse.removeClass('show');
    //   }
    // });
  });
  

})(jQuery);
