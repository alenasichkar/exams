$(document).ready(function(){
    
    $("#menu").click(function () {
        $(".header__nav").toggleClass("header__nav--open");
        $(".nav__btn").toggleClass("nav__btn--animate");
      });

      //Scroll down button main screen 
    $(function() {
        $('.scroll-down').click(function() {
            $('html, body').animate({ scrollTop: $('section.latest').offset().top }, 1000);
            return false;
        });
    });
    
    $('#trending__slider').slick({
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
    $('#blog__slider').slick({
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="blog__slider-arrow blog__slider-arrow--prev"><span class="ion-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="blog__slider-arrow blog__slider-arrow--next"><span class="ion-chevron-right"></span></button>',
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [{
                  breakpoint: 1350,
                  settings: {
                    arrows: false
                  }
            
                }, {
            
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
            
                }]
    });

    //Slow scroll from menu-item to current section
    $(".header__nav--item").on("click", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
        top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 700);
    });
    
    //back to top
  if ($('#button-up').length) {
    let scrollTrigger = 300, // px
      backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#button-up').addClass('is-visible');
        } else {
          $('#button-up').removeClass('is-visible');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#button-up').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });
  }

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
    $('.header__nav--item').click(function(e) {
        e.preventDefault();
        $('.header__nav a').removeClass('header__nav--item--active');
        $(this).addClass('header__nav--item--active');
    });

    $('.slider__sizes--btn').click(function(e) {
        e.preventDefault();
        $('.trending__slider--sizes button').removeClass('slider__sizes--btn--active');
        $(this).addClass('slider__sizes--btn--active');
    })

    $('.fancybox').fancybox({
		// openEffect	: 'elastic',
    	// closeEffect	: 'elastic',

    	// helpers : {
    	// 	title : {
    	// 		type : 'inside'
    	// 	}
    	// }
	});

  });