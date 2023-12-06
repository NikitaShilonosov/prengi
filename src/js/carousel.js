/* Слайдер хедера */
$('.slider').slick( {
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnFocus: false,
    pauseonHover: false,
    prevArrow: "<img src='icons/prevarrow.png' class='prev' alt='1'>",
    nextArrow: "<img src='icons/nextarrow.png' class='next' alt='2'>",
    responsive: [
        {
          breakpoint : 1441,
          settings :{
            arrows: false,
            dots:false
          }
        },
        {
          breakpoint: 1024,
          settings :{
            arrows: false,
            dots:false
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots:false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots:false,
            slidesToShow: 1
          }
        }
    ]
});

/* Слайдер блока modals */
$('.modal__slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: '<img src="img/modals/nextarrow.jpg" class="next" alt="">',
  prevArrow: '<img src="img//modals/prewarraw.png" class="prev" alt="">',
  responsive: [
    {
      breakpoint : 1441,
      settings :{
        arrows: true
      }
    },
    {
      breakpoint : 1439,
      settings : {
        arrows: false
      }
    }
]
});