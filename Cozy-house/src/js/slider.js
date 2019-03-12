$('.slider').slick({
  dots: true,
  infinite: true,
  // variableWidth: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

