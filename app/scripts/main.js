// // service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./sw.js')
//     .then(serviceWorker => {
//       console.log('Service Worker registered: ', serviceWorker);
//     })
//     .catch(error => {
//       console.error('Error registering the Service Worker: ', error);
//     });
// }

// image lazy load
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// menu transition and action on click
const
  body = document.body,
  headerMenu = gsap.timeline({ paused: true }),
  headerMenu2 = gsap.timeline({ paused: true });

headerMenu.to('.menu--item__content', 0.3, {
  top: 0,
  visibility: 'visible',
  height: 'auto',
  x: 0,
  y: 0,
  opacity: 1,
  ease: Expo.Power3,
});

headerMenu.staggerFrom(
  '.menu--item__content-link',
  0.3,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  '-=0.35'
);

headerMenu.staggerFrom(
  '.menu--secondary',
  0.3,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  '+=0.35'
);

headerMenu.staggerFrom(
  '.lead-me-out__link li',
  0.3,
  {
    y: 30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  {
    y: 0,
    opacity: 1,
    ease: Expo.easeIn,
  }
);

headerMenu.reverse();
$(document).on('click', '.trigger-menu', function () {
  // alert('0');
  body.classList.toggle('menu--open');
  headerMenu.reversed(!headerMenu.reversed());
});


/* menu scroll up and down */
var c,
  currentScrollTop = 0,
  navbar = $('header');

$(window).scroll(function () {
  var a = $(window).scrollTop();
  var b = navbar.height();

  currentScrollTop = a;

  if (c < currentScrollTop && a > b + b) {
    navbar.addClass('scrollUp');
    navbar.removeClass('scrollDown');
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.removeClass('scrollUp');
    navbar.addClass('scrollDown');
  }
  c = currentScrollTop;
});

/* accordion begin */
$('.accordion-group .accordion-menu').click(playAnimation);
function playAnimation(event) {
  event.preventDefault();

  const group = $(this).parent(),
    content = $('.accordion-content');

  group.toggleClass('active').siblings().removeClass('active');
}

/* link has no value */
if ($('a.project-link')) {
  $('a.project-link .image').append('<span class="project-coming-soon">Coming Soon!</span>');
}

/* Slider */
if ($('.hear-them-say-it')) {
  const slider_one = $('.view-mobile .testimonial-one .slide'),
    actionLeft = $('.view-mobile .testimonial-action .action-left'),
    actionRight = $('.view-mobile .testimonial-action .action-right'),
    active = $('.view-mobile .testimonial-one .active');

  function init() {
    gsap.set(slider_one.not(active), {
      autoAlpha: 0,
    });

    gsap.set(actionLeft, {
      css: { 'pointer-events': 'none', color: '#fff', opacity: 0.4 },
    });

    gsap.set(actionRight, {
      css: { color: '#fff', opacity: 1.0, 'pointer-events': 'initial' },
    });
  }
  init();

  if ($(window).width() < 992) {
    // console.log('mobile');

    const slider_one = $('.view-mobile .testimonial-one .slide'),
      actionLeft = $('.view-mobile .testimonial-action .action-left'),
      actionRight = $('.view-mobile .testimonial-action .action-right'),
      active = $('.view-mobile .testimonial-one .active');

    function gotoPrevSlider(slideOut, slideIn) {
      // console.log('left');
      const leftCard = gsap.timeline(),
        content = slideIn.find('blockquote'),
        author = slideIn.find('footer'),
        index = slideIn.index(),
        size = $('.view-mobile .testimonial-one .slide').length;

      // console.log('leftCard: ' + index + ',' + size);

      if (slideIn !== 0) {
        // go to prev slider
        leftCard
          .set(slideOut, {
            autoAlpha: 0,
            css: {
              className: '-=slide testimonial-content',
            },
          })
          .set(slideIn, {
            x: '-100%',
            autoAlpha: 0,
            css: {
              className: '+=slide active testimonial-content',
            },
          })
          .to(slideOut, {
            autoAlpha: 0,
            x: '100%',
            ease: Power3.easeInOut,
          })
          .to(slideIn, {
            x: '0',
            autoAlpha: 1,
            ease: Power3.easeInOut,
          });
      }

      gsap.to(actionRight, 0.3, {
        css: {
          color: '#fff',
          opacity: 1.0,
          'pointer-events': 'initial',
        },
      });

      if (index === 0) {
        gsap.to(actionLeft, 0.3, {
          css: {
            'pointer-events': 'none',
            color: '#fff',
            opacity: 0.4,
          },
        });
      }
    }

    function gotoNextSlider(slideOut, slideIn) {
      // console.log('right');
      const rightCard = gsap.timeline(),
        content = slideIn.find('blockquote'),
        author = slideIn.find('footer'),
        index = slideIn.index(),
        size = $('.view-mobile .testimonial-one .slide').length;

      // console.log('rightCard: ' + index + ',' + size);

      if (slideIn !== 0) {
        rightCard
          .set(slideOut, {
            autoAlpha: 0,
            css: {
              className: '-=slide testimonial-content',
            },
          })
          .set(slideIn, {
            x: '-100%',
            autoAlpha: 0,
            css: {
              className: '+=slide active testimonial-content',
            },
          })
          .to(slideOut, {
            autoAlpha: 0,
            x: '100%',
            ease: Power3.easeInOut,
          })
          .to(slideIn, {
            x: '0',
            autoAlpha: 1,
            ease: Power3.easeInOut,
          });
      }

      gsap.to(actionLeft, 0.3, {
        css: { color: '#fff', opacity: 1.0, 'pointer-events': 'initial' },
      });

      if (index == 3) {
        gsap.to(actionRight, 0.3, {
          css: { 'pointer-events': 'none', color: '#fff', opacity: 0.4 },
        });
      }
    }

    actionLeft.click(function (e) {
      e.preventDefault();
      const slideOut = $('.view-mobile .testimonial-one .slide'),
        slideIn = $('.view-mobile .testimonial-one .slide.active').prev();
      gotoPrevSlider(slideOut, slideIn);
    });

    actionRight.click(function (e) {
      // console.log('right click');
      e.preventDefault();
      const slideOut = $('.view-mobile .testimonial-one .slide'),
        slideIn = $('.view-mobile .testimonial-one .slide.active').next();
      gotoNextSlider(slideOut, slideIn);
    });
  } else {
    // console.log('desktop');
    const slider_one = $('.view-desktop .testimonial-one .slide'),
      actionLeft = $('.view-desktop .testimonial-action .action-left'),
      actionRight = $('.view-desktop .testimonial-action .action-right'),
      active = $('.view-desktop .testimonial-one .active');

    function init() {
      TweenLite.set(slider_one.not(active), {
        autoAlpha: 0,
      });

      TweenLite.set(actionLeft, {
        css: { 'pointer-events': 'none', color: '#fff', opacity: 0.4 },
      });

      TweenLite.set(actionRight, {
        css: { color: '#fff', opacity: 1.0, 'pointer-events': 'initial' },
      });
    }
    init();

    function gotoNextSlider(slideOut, slideIn) {
      const tl = gsap.timeline(),
        content = slideIn.find('blockquote'),
        author = slideIn.find('footer'),
        index = slideIn.index(),
        size = $('.view-desktop .testimonial-one .slide').length;

      if (slideIn !== 0) {
        // go to next slider
        tl
          // init out
          .set(slideOut, {
            autoAlpha: 0,
            css: {
              className: '-=slide testimonial-content',
            },
          })
          // init in
          .set(slideIn, {
            x: '100%',
            autoAlpha: 0,
            css: {
              className: '+=slide active testimonial-content',
            },
          })
          // move out
          .to(
            slideOut,
            {
              autoAlpha: 0,
              x: '100%',
              ease: Power3.easeInOut,
            },
            0
          )
          //move in
          .to(
            slideIn,
            {
              x: '0',
              autoAlpha: 1,
              ease: Power3.easeInOut,
            },
            0
          );
      }

      TweenLite.to(actionLeft, 0.3, {
        css: { color: '#fff', opacity: 1.0, 'pointer-events': 'initial' },
      });

      // console.log(index);

      if (index == 1) {
        TweenLite.to(actionRight, 0.3, {
          css: { 'pointer-events': 'none', color: '#fff', opacity: 0.4 },
        });
      }
    }

    actionRight.click(function (e) {
      // console.log('right');
      e.preventDefault();
      const slideOut = $('.view-desktop .testimonial-one .slide'),
        slideIn = $('.view-desktop .testimonial-one .slide.active').next();
      gotoNextSlider(slideOut, slideIn);
    });

    function gotoPrevSlider(slideOut, slideIn) {
      // console.log('left');

      const tl = gsap.timeline(),
        content = slideIn.find('blockquote'),
        author = slideIn.find('footer'),
        index = slideIn.index(),
        size = $('.view-desktop .testimonial-one .slide').length;

      // console.log(index + ',' + size);

      if (slideIn !== 0) {
        // go to prev slider
        tl
          // init out
          .set(slideOut, {
            autoAlpha: 0,
            css: {
              className: '-=slide testimonial-content',
            },
          })
          // init in
          .set(slideIn, {
            x: '-100%',
            autoAlpha: 0,
            css: {
              className: '+=slide active testimonial-content',
            },
          })
          // move out
          .to(
            slideOut,
            {
              autoAlpha: 0,
              x: '100%',
              ease: Power3.easeInOut,
            },
            0
          )
          //move in
          .to(
            slideIn,
            {
              x: '0',
              autoAlpha: 1,
              ease: Power3.easeInOut,
            },
            0
          );
      }

      TweenLite.to(actionRight, 0.3, {
        css: { color: '#fff', opacity: 1.0, 'pointer-events': 'initial' },
      });

      if (index === 0) {
        TweenLite.to(actionLeft, 0.3, {
          css: { 'pointer-events': 'none', color: '#fff', opacity: 0.4 },
        });
      }
    }

    actionLeft.click(function (e) {
      e.preventDefault();
      const slideOut = $('.view-desktop .testimonial-one .slide'),
        slideIn = $('.view-desktop .testimonial-one .slide.active').prev();
      gotoPrevSlider(slideOut, slideIn);
    });
  }
}

// all page animation
AOS.init({
  once: true,
  mirror: false
});
