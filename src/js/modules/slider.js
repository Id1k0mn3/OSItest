import $ from 'jquery'
import slick from 'slick-carousel'

export function slider() {
  console.log($)
  $('.slider').slick({
    slidesToShow: 3,
    arrows: true,
    infinite: false,
    prevArrow: '.slick-button--prev',
    nextArrow: '.slick-button--next',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 564,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  })
  // sliders.forEach(slider => {
  //   slider.slick({
  //     slidesToShow: 1
  //   })
  // })
}