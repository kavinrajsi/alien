// const body = document.body,
// scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
// height = scrollWrap.getBoundingClientRect().height - 1,
// speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
// offset += (window.pageYOffset - offset) * speed;

// var scroll = "translateY(-" + offset + "px) translateZ(0)";
// scrollWrap.style.transform = scroll;

// callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();

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
headerMenu.to('.menu--icon span:first-child', 0.035, {
  opacity: 1,
  rotation: 30,
  ease: Power4.easeOut,
});

headerMenu.to('.menu--icon span:last-child', 0.0354, {
  opacity: 1,
  rotation: -30,
  y: -24,
  ease: Power4.easeOut,
});

headerMenu.to('.menu--item__content',0.30, {
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
 0.30,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  '-=0.35'
);

headerMenu.staggerFrom(
  '.menu--secondary',
 0.30,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  '+=0.35'
);

headerMenu.staggerFrom(
  '.lead-me-out__link li',
 0.30,
  {
    y: 20,
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
  body.classList.toggle('menu--open');
  headerMenu.reversed(!headerMenu.reversed());
});

/* timeline 2 for header  */
const
time2 = 0.0011,
headerMenu2 = gsap.timeline({ paused: true });


headerMenu2.to('.menu--item__content', time2, {
  top: 0,
  visibility: 'visible',
  height: 'auto',
  x: 0,
  y: 0,
  opacity: 1,
  ease: Expo.Power3,
});

headerMenu2.staggerFrom(
  '.menu--item__content-link',
  time2,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },'-=0.2'
);

headerMenu2.staggerFrom(
  '.menu--secondary',
  time2,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },'-=0.2'
);

headerMenu2.staggerFrom(
  '.lead-me-out__link li',
  time2,
  {
    y: 20,
    opacity: 0,
    ease: Expo.easeIn,
  },
  {
    y: 0,
    opacity: 1,
    ease: Expo.easeIn,
  },'-=0.2'
);

$(document).on('click', '.menu--open header .trigger-menu, .menu--scroller a, .lead-me-out__link a', function () {
  body.classList.toggle('menu--open');
  console.log('2');
  headerMenu2.reversed(!headerMenu2.reversed());
});

/* timeline 2 for header end  */


/* accordion begin */
console.clear();
$(".accordion-group .button").click(playAnimation);

function playAnimation(event) {
  event.preventDefault();

  var $this = $(this).parent();
  var $thisContent = $this.find(".accordion-content");

  // close any open ones
  TweenMax.to(".expanded .accordion-content", 0.2, { height: "0", ease: Sine.easeInOut });
  TweenMax.to(".expanded", 0.2, { className: "-=expanded", ease: Sine.easeInOut });

  $this.toggleClass("expanded");

  if ($this.hasClass("expanded")) {
    var self = this;
    setTimeout(function() {
      theOffset = $(self).offset();
      TweenMax.to(window, 1, { scrollTo: theOffset.top - 56 });
    }, 310);

    TweenMax.set($thisContent[0], { height: "auto" });
    TweenMax.from($thisContent[0], 0.2, { height: 0 });
  }

}

/* accordion end */

// init controller
const controller = new ScrollMagic.Controller();

/* last section */
$('.requestacces').each(function (i) {
  const animateIn = gsap.timeline(),
    requestaccesContent = $(this).find('p span, .callTo');

  animateIn.staggerFromTo(
    requestaccesContent,
    1,
    {
      opacity: 0,
      y: 20,
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
    reverse: false,
  })
    .setTween(animateIn)

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
        y: 20,
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
      reverse: false,
    })
      .setTween(herounitTimeline)

      .addTo(controller);
  });
}

/* home page our service list */
if ($('.wedo-content')) {
  gsap.set('.wedo-content', {
    height: 0,
    autoAlpha: 0,
    display: 'none',
  });
  gsap.set('.asp:first-child .wedo-title', {
    autoAlpha: 1,
  });
  gsap.set('.asp:first-child .wedo-content', {
    autoAlpha: 1,
    height: 'auto',
  });

  $('.asp').each(function (i) {
    const wedocontentTimeline = gsap.timeline();
    const wedocontent = $(this).find('.wedo-content');
    const thisHeight = $(this).find('.wedo-content').outerHeight() + 20;

    wedocontentTimeline.staggerFromTo(
      wedocontent,
      0.36,
      {
        autoAlpha: 0,
        height: 0,
        y: -34,
        transformOrigin: 'top',
        ease: Linear.easeNone,
      },
      {
        height: thisHeight,
        autoAlpha: 1,
        display: 'block',
        ease: Cubic.easeInOut,
        overwrite: 'none',
        y: 0,
        transformOrigin: 'top',
      }
    );

    // create a scene for each element
    const wedoList = new ScrollMagic.Scene({
      // triggerElement: revealElements[i],
      triggerElement: this,
      triggerHook: 0.5,
      reverse: false,
    })
      .setClassToggle(this, 'active')
      .setTween(wedocontentTimeline)
      // .addIndicators({ name: [i] }) // add indicators (requires plugin)
      .addTo(controller);
  });
}

/* page : service */

$('.container').each(function (i) {
  const animateIn = gsap.timeline(),
    requestaccesContent = $(this).find(
      '.section-row__image-wrapper, .section-row__image-wrapper + .section-row__text p, .section-row__image-wrapper + .section-row__text ul, .section-row__image-wrapper + .section-row__text h3, .section-row__text--heading,  .section-row__text--heading + .section-row__text, .page__content--header_title, .card, .section-row__text-special, .section-row__text-special + .section-row__text, .section-row__text.event-what-we span'
    );

  animateIn.staggerFromTo(
    requestaccesContent,
   0.30,
    {
      opacity: 0,
      y: 20,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    },
    {
      opacity: 1,
      y: 0,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    }
  );

  const scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: false,
  })
    .setTween(animateIn)
    .addTo(controller);
});

$('.page__content--service__page--title').each(function (i) {
  const animateInTitle = gsap.timeline(),
    requestaccesContentSpan = $(this).find('span');

  animateInTitle.staggerFromTo(
    requestaccesContentSpan,
   0.30,
    {
      opacity: 0,
      y: 20,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    },
    {
      opacity: 1,
      y: 0,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    }
  );

  const scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: false,
  })
    .setTween(animateInTitle)
    .addTo(controller);
});

/* page : about */

$('.page__content--about__we-ideas').each(function (i) {
  const animateIn = gsap.timeline(),
    requestaccesContent = $(this).find('.section-row__text, .card');

  animateIn.staggerFromTo(
    requestaccesContent,
   0.30,
    {
      opacity: 0,
      y: 20,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    },
    {
      opacity: 1,
      y: 0,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    }
  );

  const scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: false,
  })
    .setTween(animateIn)
    .addTo(controller);
});

$('.page__content--about__doing-rigidity').each(function (i) {
  const animateIn = gsap.timeline(),
    requestaccesContent = $(this).find(
      '.section-row__text p strong, .section-row__text  p+p'
    );

  animateIn.staggerFromTo(
    requestaccesContent,
   0.30,
    {
      opacity: 0,
      y: 20,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    },
    {
      opacity: 1,
      y: 0,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    }
  );

  const scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: false,
  })
    .setTween(animateIn)
    .addTo(controller);
});

$('.page__content--about').each(function (i) {
  const animateIn = gsap.timeline(),
    requestaccesContent = $(this).find(
      '.text-content p strong, .text-content p + p'
    );

  animateIn.staggerFromTo(
    requestaccesContent,
   0.30,
    {
      opacity: 0,
      y: 20,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    },
    {
      opacity: 1,
      y: 0,
      transformOrigin: 'bottom',
      ease: Power4.easeOut,
    }
  );

  const scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: false,
  })
    .setTween(animateIn)
    .addTo(controller);
});
