$(document).ready(function(){
  $('.sliderimg').slick();
});
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3.5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '14px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '14px',
        slidesToShow: 1
      }
    }
  ]
});
