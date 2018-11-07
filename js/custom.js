$(function(){

  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false
        }
      }
    ]
  });

});
