
$('.reviews__slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  variableWidth: true,
  dots: false,
  mobileFirst: true,
  asNavFor: '.reviews__description',

  responsive: [
    {

    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});
$('.reviews__description').slick({
  asNavFor: '.reviews__slider',
  dots: true,
  arrows: false,
  infinite: true,
});
