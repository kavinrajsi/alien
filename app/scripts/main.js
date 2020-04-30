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
const body = document.body,
  headerMenu = gsap.timeline({ paused: true });

headerMenu.to('.menu--icon span:first-child', 0.12, {
  css: { transform: 'rotate(30deg)' },
  ease: Expo.easeOut,
});

headerMenu.to('.menu--icon span:last-child', 0.12, {
  css: { transform: 'rotate(-30deg)', top: '-22px' },
  ease: Expo.easeOut,
});

headerMenu.to('.menu--item__content', 0.3, {
  top: 90,
  visibility: 'visible',
  height: 'calc(100% - 80px)',
  x: 0,
  y: 0,
  opacity: 1,
  ease: Expo.easeIn,
});

headerMenu.staggerFrom(
  '.menu--item__content-link a, .menu--secondary, .lead-me-out__link a',
  0.3,
  {
    y: 30,
    opacity: 0,
    ease: Expo.easeIn,
  }
);

headerMenu.reverse();
$(document).on('click', '.trigger-menu, .menu--item__content a', function () {
  body.classList.toggle('menu--open');
  headerMenu.reversed(!headerMenu.reversed());
});

// init controller
const controller = new ScrollMagic.Controller();

/* last section */
$('.requestacces').each(function (i) {
  const animateIn = gsap.timeline(),
    requestaccesContent = $(this).find('p span');

  animateIn.staggerFromTo(
    requestaccesContent,
    1,
    {
      opacity: 0,
      y: 30,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    },
    {
      opacity: 1,
      y: 0,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    },
    0.5
  );

  const scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: true,
  })
    .setTween(animateIn)
    .addIndicators({ name: 'send signal' })
    .addTo(controller);
});

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
    console.log('mobile');

    const slider_one = $('.view-mobile .testimonial-one .slide'),
      actionLeft = $('.view-mobile .testimonial-action .action-left'),
      actionRight = $('.view-mobile .testimonial-action .action-right'),
      active = $('.view-mobile .testimonial-one .active');

    function gotoPrevSlider(slideOut, slideIn) {
      console.log('left');
      const leftCard = gsap.timeline(),
        content = slideIn.find('blockquote'),
        author = slideIn.find('footer'),
        index = slideIn.index(),
        size = $('.view-mobile .testimonial-one .slide').length;

      console.log('leftCard: ' + index + ',' + size);

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
            y: '-100%',
            autoAlpha: 0,
            css: {
              className: '+=slide active testimonial-content',
            },
          })
          .to(slideOut, {
            autoAlpha: 0,
            y: '100%',
            ease: Power3.easeInOut,
          })
          .to(slideIn, {
            y: '0',
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
      console.log('right');
      const rightCard = gsap.timeline(),
        content = slideIn.find('blockquote'),
        author = slideIn.find('footer'),
        index = slideIn.index(),
        size = $('.view-mobile .testimonial-one .slide').length;

      console.log('rightCard: ' + index + ',' + size);

      if (slideIn !== 0) {
        rightCard
          .set(slideOut, {
            autoAlpha: 0,
            css: {
              className: '-=slide testimonial-content',
            },
          })
          .set(slideIn, {
            y: '-100%',
            autoAlpha: 0,
            css: {
              className: '+=slide active testimonial-content',
            },
          })
          .to(slideOut, {
            autoAlpha: 0,
            y: '100%',
            ease: Power3.easeInOut,
          })
          .to(slideIn, {
            y: '0',
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
      console.log('right click');
      e.preventDefault();
      const slideOut = $('.view-mobile .testimonial-one .slide'),
        slideIn = $('.view-mobile .testimonial-one .slide.active').next();
      gotoNextSlider(slideOut, slideIn);
    });
  } else {
    console.log('desktop');
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
            y: '100%',
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
              y: '100%',
              ease: Power3.easeInOut,
            },
            0
          )
          //move in
          .to(
            slideIn,
            {
              y: '0',
              autoAlpha: 1,
              ease: Power3.easeInOut,
            },
            0
          );
      }

      TweenLite.to(actionLeft, 0.3, {
        css: { color: '#fff', opacity: 1.0, 'pointer-events': 'initial' },
      });

      console.log(index);

      if (index == 1) {
        TweenLite.to(actionRight, 0.3, {
          css: { 'pointer-events': 'none', color: '#fff', opacity: 0.4 },
        });
      }
    }

    actionRight.click(function (e) {
      console.log('right');
      e.preventDefault();
      const slideOut = $('.view-desktop .testimonial-one .slide'),
        slideIn = $('.view-desktop .testimonial-one .slide.active').next();
      gotoNextSlider(slideOut, slideIn);
    });

    function gotoPrevSlider(slideOut, slideIn) {
      console.log('left');

      const tl = gsap.timeline(),
        content = slideIn.find('blockquote'),
        author = slideIn.find('footer'),
        index = slideIn.index(),
        size = $('.view-desktop .testimonial-one .slide').length;

      console.log(index + ',' + size);

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
            y: '-100%',
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
              y: '100%',
              ease: Power3.easeInOut,
            },
            0
          )
          //move in
          .to(
            slideIn,
            {
              y: '0',
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

/* we let our work */
if ($('.we-let-our-work')) {
  /* Slide in add bg color */
  new ScrollMagic.Scene({
    triggerElement: '.we-let-our-work',
    triggerHook: 0.5,
    offset: '0',
    reverse: true,
  })

    .setClassToggle('.we-let-our-work', 'wework-section')
    .addIndicators({ name: 'bg color' })
    .addTo(controller);

  /* animation */
  $('.project-list').each(function (i) {
    const worklistTimeline = gsap.timeline(),
      worklist = $(this).find('.project-wrapper');

    worklistTimeline.staggerFromTo(
      worklist,
      0.25,
      {
        opacity: 0,
        y: 30,
        transformOrigin: 'bottom',
        ease: Power4.easeOut,
      },
      {
        opacity: 1,
        y: 0,
        transformOrigin: 'bottom',
        ease: Power4.easeOut,
      },
      0.25
    );

    const scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.5,
      reverse: true,
    })
      .setTween(worklistTimeline)
      .addIndicators({ name: 'work list' + i + '.' })
      .addTo(controller);
  });
}

/* hero unit */
if ($('.hero-unit')) {
  $('.hero-unit').each(function (i) {
    const herounitTimeline = gsap.timeline(),
      herounit = $(this).find('.page-title, .page-title-secondary');

    herounitTimeline.staggerFromTo(
      herounit,
      1,
      {
        opacity: 0,
        y: 30,
        transformOrigin: 'bottom',
        ease: Power4.easeOut,
      },
      {
        opacity: 1,
        y: 0,
        transformOrigin: 'bottom',
        ease: Power4.easeOut,
      },
      0.5
    );

    const scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      reverse: true,
    })
      .setTween(herounitTimeline)
      .addIndicators({ name: 'hero section' })
      .addTo(controller);
  });
}


/* home page our service list */
if ($('.wedo-content')) {
  gsap.set('.wedo-content', {
    autoAlpha: 0.3,
    height: 0,
  });

  $('.asp').each(function (i) {
    const wedocontentTimeline = gsap.timeline();
    const wedocontent = $(this).find('.wedo-content');

    wedocontentTimeline.staggerFromTo(
      wedocontent,
      0.5,
      {
        opacity: 0,
        height: 0,
        y: 30,
        transformOrigin: 'bottom',
        ease: Power4.easeOut,
      },
      {
        opacity: 1,
        height: '100%',
        y: 0,
        transformOrigin: 'bottom',
        ease: Power4.easeOut,
      },
      0.25
    );

    // create a scene for each element
    const wedoList = new ScrollMagic.Scene({
      // triggerElement: revealElements[i],
      triggerElement: this,
      offset: '0',
      triggerHook: 0.5,
      duration: '160px',
      reverse: true
    })
      .setClassToggle(this, 'active')
      .setTween(wedocontentTimeline)
      .addIndicators({
        name: i + 1,
        colorTrigger: 'white',
        colorStart: 'white',
        colorEnd: 'white',
        indent: 25,
      }) // add indicators (requires plugin)
      .addTo(controller);
  });
}
