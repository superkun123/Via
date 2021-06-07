$(document).ready(function(){


    $('.main-page-slider__wrapper').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        fade: true,
        autoplay: false,
        autoplaySpeed: 5200,
        prevArrow: `<button type="button" class="slick-prev">
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#02327B"/>
<rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#02327B"/>
</svg>

    
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="#02327B"/>
        <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="#02327B"/>
        </svg></button>`

    });


    let progress = 0


  const updatebar = () => {
    if (progress < 100) {
        progress = progress + 12
        // console.log(progress)
        $('.line-full').css('width', `${progress}%`)
      
    } else if (progress == 100 || progress > 100) {
        $('.line-full').css('width', '0')
        progress = 0
        $('.main-page-slider__wrapper').slick("slickNext")
        // console.log('отработал')
    }
  }

  $('.slick-next').on('click', function() {
    $('.line-full').css('width', '0')
        progress = 0
  })

  $('.slick-prev').on('click', function() {
    $('.line-full').css('width', '0')
        progress = 0
  })


  $('.main-page-slider__wrapper').on('swipe', function(event, slick, direction){
    $('.line-full').css('width', '0')
    progress = 0
  });


  setInterval(updatebar, 500)

 

if(window.matchMedia("(max-width: 1279px)").matches) {


    $('.hidden-slider-1').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          }
        ],
        prevArrow: `<button type="button" class="slick-prev">
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#02327B"/>
  <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#02327B"/>
  </svg>
  
    
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="#02327B"/>
        <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="#02327B"/>
        </svg></button>`
  
      });


      $('.hidden-slider-2').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        speed: 500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          }
        ],
        prevArrow: `<button type="button" class="slick-prev">
        <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#02327B"/>
  <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#02327B"/>
  </svg>
  
    
        </button>`,
        nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="#02327B"/>
        <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="#02327B"/>
        </svg></button>`
  
      });
  







    let sliderProgressBar = function (slider, bar, barLabel) {
        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
          var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;


        

          if(window.matchMedia("(max-width: 767px)").matches) {
            var calc = ( (nextSlide) / (slick.slideCount-2) ) * 100;
          } else {
            var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;
          }
      
              
              bar
                .css('background-size', calc + '% 100%')
                .attr('aria-valuenow', calc );
              
              barLabel.text( calc + '% completed' );
        });
      }
      
      
      
      sliderProgressBar( $('.hidden-slider-1'), $('#progressBar1'), $('#progressBarLebel1')  )
  
  
  
      sliderProgressBar( $('.hidden-slider-2'), $('#progressBar2'), $('#progressBarLebel2')  )
  
}
  
// console.warn = () => {};


$(window).resize(function() {
  try {
    if(window.matchMedia("(max-width: 1279px)").matches) {
     
      $('.hidden-slider-1').slick({
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          speed: 500,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            }
          ],
          prevArrow: `<button type="button" class="slick-prev">
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#02327B"/>
    <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#02327B"/>
    </svg>
    
      
          </button>`,
          nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="#02327B"/>
          <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="#02327B"/>
          </svg></button>`
    
        });
  
  
        $('.hidden-slider-2').slick({
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          speed: 500,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            }
          ],
          prevArrow: `<button type="button" class="slick-prev">
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#02327B"/>
    <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#02327B"/>
    </svg>
    
      
          </button>`,
          nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="#02327B"/>
          <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="#02327B"/>
          </svg></button>`
    
        });
    
  
  
  
  
  
  
  
      let sliderProgressBar = function (slider, bar, barLabel) {
          slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
            var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;
  
  
          
  
            if(window.matchMedia("(max-width: 767px)").matches) {
              var calc = ( (nextSlide) / (slick.slideCount-2) ) * 100;
            } else {
              var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;
            }
        
                
                bar
                  .css('background-size', calc + '% 100%')
                  .attr('aria-valuenow', calc );
                
                barLabel.text( calc + '% completed' );
          });
        }
        
        
        
        sliderProgressBar( $('.hidden-slider-1'), $('#progressBar1'), $('#progressBarLebel1')  )
    
    
    
        sliderProgressBar( $('.hidden-slider-2'), $('#progressBar2'), $('#progressBarLebel2')  )
    
  } else {
    $('.hidden-slider-1').slick("unslick")
    $('.hidden-slider-2').slick("unslick")
  }

  } catch {
    // $('.hidden-slider-1').slick("unslick")
    // $('.hidden-slider-2').slick("unslick")
  }
//   if(window.matchMedia("(max-width: 1279px)").matches) {
//     console.log('resize')
//     $('.hidden-slider-1').slick({
//         infinite: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         speed: 500,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2
//             }
//           }
//         ],
//         prevArrow: `<button type="button" class="slick-prev">
//         <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#02327B"/>
//   <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#02327B"/>
//   </svg>
  
    
//         </button>`,
//         nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="#02327B"/>
//         <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="#02327B"/>
//         </svg></button>`
  
//       });


//       $('.hidden-slider-2').slick({
//         infinite: false,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         speed: 500,
//         responsive: [
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2
//             }
//           }
//         ],
//         prevArrow: `<button type="button" class="slick-prev">
//         <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <rect width="1.67159" height="7.06692" rx="0.835795" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.99707 9.99609)" fill="#02327B"/>
//   <rect width="1.65792" height="7.07062" rx="0.828962" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 6.17188 1.17188)" fill="#02327B"/>
//   </svg>
  
    
//         </button>`,
//         nextArrow: `<button type="button" class="slick-next"><svg width="7" height="10" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M7.77824 7.7784C8.16877 7.38787 8.16877 6.75471 7.77825 6.36418C7.38772 5.97366 6.75456 5.97366 6.36403 6.36418L0.707177 12.021C0.316653 12.4116 0.316652 13.0447 0.707177 13.4353C1.0977 13.8258 1.73087 13.8258 2.12139 13.4353L7.77824 7.7784Z" fill="#02327B"/>
//         <rect width="2" height="10" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 1.41406 0)" fill="#02327B"/>
//         </svg></button>`
  
//       });
  







//     let sliderProgressBar = function (slider, bar, barLabel) {
//         slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
//           var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;


        

//           if(window.matchMedia("(max-width: 767px)").matches) {
//             var calc = ( (nextSlide) / (slick.slideCount-2) ) * 100;
//           } else {
//             var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;
//           }
      
              
//               bar
//                 .css('background-size', calc + '% 100%')
//                 .attr('aria-valuenow', calc );
              
//               barLabel.text( calc + '% completed' );
//         });
//       }
      
      
      
//       sliderProgressBar( $('.hidden-slider-1'), $('#progressBar1'), $('#progressBarLebel1')  )
  
  
  
//       sliderProgressBar( $('.hidden-slider-2'), $('#progressBar2'), $('#progressBarLebel2')  )
  
// } else {
//   $('.hidden-slider-1').slick("unslick")
//   $('.hidden-slider-2').slick("unslick")
// }
})





  $('.main-nav__hamburger').on('click', function () {
    $('.mobile-menu').toggleClass('open-menu')
    $(this).toggleClass('hamburger--active')
    $('.mobile-close-png').toggleClass('none')
    $('.mobile-open-png').toggleClass('block')
    $('.callback').toggleClass('callback-toggle')
    $('.firstline').toggleClass('firstline-active ')
    $('.secondline').toggleClass('secondline-active')
    $('.thirdline').toggleClass('thirdline-active')
    $('.breadcrumbs').toggleClass('hide')
  })



  $('.hamburger-inner').on('click', function () {
   $('.logo__svg').toggleClass('white-svg')
   $('.phone-svg').toggleClass('white-svg')
   $('.line').toggleClass('white-svg')
   $('.breadcrumbs').toggleClass('hide')
  })


 
// Бегущая строка

$('.scroll-line').marquee({
  startVisible: true, 
  duplicated: false,
  speed: 400,
  duration: 2000
});


$('.showmore-btn').on('click', function() {
  console.log('click btn')
  let showMoreParen = $(this).parents('.col').get(0)
  console.log(showMoreParen)
  $(showMoreParen).find('.showmore-mask').toggleClass('disable')
  $(this).find('svg').toggleClass('rotate180')
})




$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  prevArrow: `<button type="button" class="slick-prev"><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1.33722" height="5.65333" rx="0.668611" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3.99805 7.99609)" fill="#02327B"/>
  <rect width="1.32629" height="5.65629" rx="0.663145" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 4.93848 0.936523)" fill="#02327B"/>
  </svg>
  </button>`,
  nextArrow: `<button type="button" class="slick-next"><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1.33722" height="5.65333" rx="0.668611" transform="matrix(-0.707107 0.707107 0.707107 0.707107 0.945312 0)" fill="#02327B"/>
  <rect width="1.32629" height="5.65629" rx="0.663145" transform="matrix(0.707107 0.707107 0.707107 -0.707107 0.00488281 7.05957)" fill="#02327B"/>
  </svg>
  </button>`
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  infinite: true,
  vertical:false,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  draggable: true,
  verticalSwiping:true,
  responsive: [
  {
      breakpoint: 992,
      settings: {
        vertical: false,
      }
  },
  {
    breakpoint: 768,
    settings: {
      vertical: false,
    }
  },
  {
    breakpoint: 580,
    settings: {
      vertical: false,
      slidesToShow: 3,
    }
  },
  {
    breakpoint: 380,
    settings: {
      vertical: false,
      slidesToShow: 4,
    }
  }
  ]
});



$('.modal-content .submit-input').on('click', function(e) {
  e.preventDefault()
  let currentModal = $(e.target).closest('.modal-content')
  console.log(currentModal)
  $(currentModal).find('.modal__header').addClass('disable')
  $(currentModal).find('.modal-form').addClass('disable')
  $(currentModal).find('.modal-final').addClass('display-block')
  $(currentModal).find('.modal-gear').addClass('display-block')
  $('#myModal').on('hidden.bs.modal', function (e) {
    // do something...
  })
  // $('.modal__header').addClass('disable')
  // $('.modal-form').addClass('disable')
  // $('.modal-final').addClass('display-block')
  // $('.modal-gear').addClass('display-block')
})



$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.js-tab-trigger.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});



$('.video-play').on('click', function(e) {
  e.preventDefault()
  let parentVideo = $(this).parent().get(0)
  // let video = $( ".video-modal" ).find('video')
  let video = $(parentVideo).find('video')
  video.get(0).play();
  $(video).toggleClass('pause')
  $(this).addClass('hide-video-btn')

  $('.pause').on('click', function() {
    video.get(0).pause()
    $('.video-play').removeClass('hide-video-btn')
  })


})


$('.video-fullScreen').on('click', function(e) {
    e.preventDefault()
  let video = document.querySelector( ".main-video" )
  if (video.requestFullscreen) {
  video.requestFullscreen();
} else if (video.webkitRequestFullscreen) { /* Safari */
  video.webkitRequestFullscreen();
} else if (video.msRequestFullscreen) { /* IE11 */
  video.msRequestFullscreen();
}
})




if (window.matchMedia("(max-width: 1279px)").matches) {
  $('.main-header .menu-list li').removeClass('menu-list__li')
  $('.main-header .menu-list li a').removeClass('border-anim-white')
  $('.main-header .menu-list li').appendTo('.mobile-menu__ul')
  $('.product-item__header .btn-primary').appendTo('.product-mobile-btn-container')
  $('.product-item__header').appendTo('.mobile-product-header')
  $('.tab-content__item').appendTo('.product-item__description-card')
} else {
  $('.main-header .menu-list li').addClass('menu-list__li')
  $('.main-header .menu-list li a').addClass('border-anim-white')

}



    $('.main-header .menu-list li').clone().appendTo('.mobile-menu__ul')
    $('.product-item__header .btn-primary').appendTo('.product-mobile-btn-container')
    $('.product-item__header').clone().appendTo('.mobile-product-header')
    $('.tab-content__item').clone().appendTo('.product-item__description-card')


 




$('.btn-showmore').on('click', function() {
  $('.hidden-mobile').toggleClass('show')
})


if($('.gear-rotate-container').length) {
  const tl = new TimelineMax();
const controller = new ScrollMagic.Controller();


tl.from('.gear-rotate-container', .10, {rotation:90} );



const offsetSize = () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
     return 1000         
  } else if (window.matchMedia("(max-width: 1279px)").matches) {
    return 1200
  } else {
    return 100
  }
}


const scene = new ScrollMagic.Scene({
  triggerElement: ".about-company-sect",
  triggerHook: 'onLeave',
            duration: 500,
            offset: offsetSize()
})
  .setPin(".about-company-sect")
  .setTween(tl)
    .addTo(controller);

}



$('.letters__link').magnificPopup({
  type: 'image',
});

$('.certificates__link').magnificPopup({
  type: 'image',
});


$('.product-expamples__item').magnificPopup({
  type: 'image',
  gallery:{enabled:true}
});


$('.slider-banner-image').magnificPopup({
  type: 'image',
});




// $('.marquee').marquee({
//   startVisible: true, 
//   duplicated: true, 
//   speed: 1050,
// });


  });



