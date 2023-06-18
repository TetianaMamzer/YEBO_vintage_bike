$(document).ready(function () {
  if ($(".sliders__body").length > 0) {
    $(".sliders__body").slick({
      arrows: true,
      dots: true,
      accessibility: false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      nextArrow: '<button type="button" class="slick-next"></button>',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      responsive: [{
        brekpoint: 768,
        settings: {}
      }]
  
    });
  }
})

