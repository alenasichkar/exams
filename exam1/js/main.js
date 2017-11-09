$(document).ready(function() {
  
  //Slow scroll from menu-item to current section
  $(".header__nav-item").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 700);
  });

  //Fixed sticky aside menu
  let menu = $(".header");
  fixed_menu = "header--fixed";
  menuPos = menu.offset().top;

  $(window).scroll(function () {
    if ($(this).scrollTop() > menuPos) {
      menu.addClass(fixed_menu);
    } else {
      menu.removeClass(fixed_menu);
    }
  });

  // Set active element in color
  $('.header__nav-item').click(function(e) {
    e.preventDefault();
    $('.header__nav a').removeClass('header__nav-item--active');
    $(this).addClass('header__nav-item--active');
  });

  $(function () {
    //Initialize filterizr with default options
    $('#filtr-container').filterizr();
  });

  $(function() {
    //Simple filter controls
    $('.custom-simplefilter li').click(function() {
        $('.custom-simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
  });
});


$('#team__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 4000,
    fade: true,
  });

  $('#testimonials__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    fade: true,
  });