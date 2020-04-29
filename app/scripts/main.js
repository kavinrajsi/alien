$(document).ready(function () {
    if ($('.we-let-our-work')[0]) {
    var project1 = $('.we-let-our-work').offset();
    var $window = $(window);

    $window.scroll(function () {
      if ($window.scrollTop() >= project1.top) {
        $('body').removeClass().addClass('wework-section');
      }
    });
  }
});

// init controller
const controller = new ScrollMagic.Controller();
  if ($('.hero-unit')[0]) {
  $('.hero-unit').each(function (i) {
    var animateIn = new TimelineMax();
    var imgOvarly = $(this).find('.page-title, .page-title-secondary');
    console.log(imgOvarly);
    animateIn.staggerFromTo(
      imgOvarly,
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

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.5,
      offset: '0',
    })
      .setTween(animateIn)
      .addIndicators()
      .addTo(controller);

    var reverse = scene.reverse();
    scene.reverse(true);
  });
}

if ($('.wedo-content')[0]) {
  TweenLite.set('.wedo-content', {
    autoAlpha: 0.3,
    height: 0,
  });
}

if ($('.about-what-we-do')[0]) {
  $('.asp').each(function (i) {
    const animateIn = gsap.timeline();
    const imgOvarly = $(this).find('.wedo-content');
    console.log(imgOvarly);

    animateIn.staggerFromTo(
      imgOvarly,
      1,
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
      0.23
    );

    // create a scene for each element
    var wedoList = new ScrollMagic.Scene({
      // triggerElement: revealElements[i],
      triggerElement: this,
      offset: '0',
      triggerHook: 0.5,
      duration: '100px',
    })
      .setClassToggle(this, 'active')
      .setTween(animateIn)
      .addIndicators({
        name: i + 1,
        colorTrigger: 'white',
        colorStart: 'white',
        colorEnd: 'white',
        indent: 25,
      }) // add indicators (requires plugin)
      .addTo(controller);

    var reverses = wedoList.reverse();
    wedoList.reverse(true);
  });
}

if ($('.we-let-our-work')[0]) {
  $('.we-let-our-work').each(function (i) {
    var animateIn = new TimelineMax();
    var imgOvarly = $(this).find('.section-title span, .section-content');
    console.log(imgOvarly);
    animateIn.staggerFromTo(
      imgOvarly,
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

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.5,
      offset: '0',
    })
      .setTween(animateIn)
      .addIndicators()
      .addTo(controller);

    var reverse = scene.reverse();
    scene.reverse(true);
  });
}

if ($('.project-list')[0]) {
  $('.project-list').each(function (i) {
    var animateIn = new TimelineMax();
    var imgOvarly = $(this).find('.project-wrapper');
    console.log(imgOvarly);
    animateIn.staggerFromTo(
      imgOvarly,
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

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.5,
      offset: '0',
    })
      .setTween(animateIn)
      .addIndicators()
      .addTo(controller);

    var reverse = scene.reverse();
    scene.reverse(true);
  });
}


/*
 *  Page service
 */

/* service page brand list */
$('.page__content--service__brand--lost').each(function (i) {
  var animateIn = new TimelineMax();
  var imgOvarly = $(this).find('img, h3, p, ul');
  console.log(imgOvarly);
  animateIn.staggerFromTo(
    imgOvarly,
    0.26,
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
    },0.26
  );

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: true
  })
    .setTween(animateIn)
    .addIndicators()
    .addTo(controller);
});

/* service page title, what make us card */
$('.page__content--service__forces--design , .page__content--service__page--title, .section-row__card').each(function (i) {
  var animateIn = new TimelineMax();
  var imgOvarly = $(this).find('.section-row__text--heading, .section-row__text, span, .card--header, .card--text_title, .card--text_content');
  console.log(imgOvarly);
  animateIn.staggerFromTo(
    imgOvarly,
    0.26,
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
    },0.26
  );

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '0',
    reverse: true
  })
    .setTween(animateIn)
    .addIndicators()
    .addTo(controller);
});


/*
 *  All page footer
 */

// footer link
$('.lead-me-out').each(function (i) {
  var animateIn = new TimelineMax();
  var imgOvarly = $(this).find('ul li');
  console.log(imgOvarly);
  animateIn.staggerFromTo(
    imgOvarly,
    0.26,
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
    },0.26
  );

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '-240px',
    reverse: true
  })
    .setTween(animateIn)
    .addIndicators({name: 'footer link'})
    .addTo(controller);
});

/* last section */
$('.requestacces').each(function (i) {
  var animateIn = new TimelineMax();
  var imgOvarly = $(this).find("p span");

  animateIn.staggerFromTo(
    imgOvarly,
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
    }
  );

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5,
    offset: '240px',
    reverse: true
  })
    .setTween(animateIn)
    .addIndicators({ name: 'send signal'})
    .addTo(controller);

});


/*
 * Home page slider
 */



/* slider */
// setup variable
// if ($(".hear-them-say-it").hasClass("view-mobile")){
if (($(window).width() < 768 )){
  const slider_one = $(".view-mobile .testimonial-one .slide"),
    actionLeft = $(".view-mobile .testimonial-action .action-left"),
    actionRight = $(".view-mobile .testimonial-action .action-right"),
    active = $(".view-mobile .testimonial-one .active");

  function init() {
    TweenLite.set(slider_one.not(active), {
      autoAlpha: 0,
    });

    TweenLite.set(actionLeft, {
      autoAlpha: 0.3,
      color: "#444",
    });

    TweenLite.set(actionRight, {
      autoAlpha: 1,
      color: "#fff",
    });
  }
  init();

  function gotoNextSlider(slideOut, slideIn) {
    const tl = gsap.timeline(),
      content = slideIn.find("blockquote"),
      author = slideIn.find("footer"),
      index = slideIn.index(),
      size = $(".view-mobile .testimonial-one .slide").length;

    if (slideIn !== 0) {
      // go to next slider
      tl
        // init out
        .set(slideOut, {
          autoAlpha: 0,
          css: {
            className: "-=slide testimonial-content",
          },
        })
        // init in
        .set(slideIn, {
          y: "100%",
          autoAlpha: 0,
          css: {
            className: "+=slide active testimonial-content",
          },
        })
        // move out
        .to(
          slideOut,
          {
            autoAlpha: 0,
            y: "-100%",
            ease: Power3.easeInOut,
          },
          0
        )
        //move in
        .to(
          slideIn,
          {
            y: "0",
            autoAlpha: 1,
            ease: Power3.easeInOut,
          },
          0
        );
    }

    // TweenLite.to(actionLeft, 0.3, {
    //   autoAlpha: 1,
    //   color: "#fff",
    // });

    console.log(index + "," + size);

    // if (index === 1) {
    // TweenLite.to(actionRight, 0.3, {
    //   autoAlpha: 0,
    //   color: "#444",
    // });
    // }
  }

  actionRight.click(function (e) {
    console.log('right');
    e.preventDefault();
    const slideOut = $(".view-mobile .testimonial-one .slide"),
      slideIn = $(".view-mobile .testimonial-one .slide.active").next();
    gotoNextSlider(slideOut, slideIn);
  });

  function gotoPrevSlider(slideOut, slideIn) {
    console.log("left");

    const tl = gsap.timeline(),
      content = slideIn.find("blockquote"),
      author = slideIn.find("footer"),
      index = slideIn.index(),
      size = $(".view-mobile .testimonial-one .slide").length;

    console.log(index + "," + size);

    if (slideIn !== 0) {
      // go to prev slider
      tl
        // init out
        .set(slideOut, {
          autoAlpha: 0,
          css: {
            className: "-=slide testimonial-content",
          },
        })
        // init in
        .set(slideIn, {
          y: "-100%",
          autoAlpha: 0,
          css: {
            className: "+=slide active testimonial-content",
          },
        })
        // move out
        .to(
          slideOut,
          {
            autoAlpha: 0,
            y: "100%",
            ease: Power3.easeInOut,
          },
          0
        )
        //move in
        .to(
          slideIn,
          {
            y: "0",
            autoAlpha: 1,
            ease: Power3.easeInOut,
          },
          0
        );
    }

    // TweenLite.to(actionRight, 0.3, {
    //   autoAlpha: 1,
    //   color: "white",
    // });

    // if (index === 0) {
    // TweenLite.to(actionLeft, 0.3, {
    //   autoAlpha: 0,
    // });
    // }
  }

  actionLeft.click(function (e) {
    e.preventDefault();
    const slideOut = $(".view-mobile .testimonial-one .slide"),
      slideIn = $(".view-mobile .testimonial-one .slide.active").prev();
    gotoPrevSlider(slideOut, slideIn);
  });

  console.log('mobile');
} else {
  console.log('den');
  const slider_one = $(".view-desktop .testimonial-one .slide"),
    actionLeft = $(".view-desktop .testimonial-action .action-left"),
    actionRight = $(".view-desktop .testimonial-action .action-right"),
    active = $(".view-desktop .testimonial-one .active");

  function init() {
    TweenLite.set(slider_one.not(active), {
      autoAlpha: 0,
    });

    TweenLite.set(actionLeft, {
      css:{'pointer-events':'none', color: '#fff', opacity: 0.4 }
    });

    TweenLite.set(actionRight, {
      css:{color: '#fff', opacity: 1.0 ,'pointer-events':'initial' }
    });
  }
  init();

  function gotoNextSlider(slideOut, slideIn) {
    const tl = gsap.timeline(),
      content = slideIn.find("blockquote"),
      author = slideIn.find("footer"),
      index = slideIn.index(),
      size = $(".view-desktop .testimonial-one .slide").length;

    if (slideIn !== 0) {
      // go to next slider
      tl
        // init out
        .set(slideOut, {
          autoAlpha: 0,
          css: {
            className: "-=slide testimonial-content",
          },
        })
        // init in
        .set(slideIn, {
          y: "100%",
          autoAlpha: 0,
          css: {
            className: "+=slide active testimonial-content",
          },
        })
        // move out
        .to(
          slideOut,
          {
            autoAlpha: 0,
            y: "-100%",
            ease: Power3.easeInOut,
          },
          0
        )
        //move in
        .to(
          slideIn,
          {
            y: "0",
            autoAlpha: 1,
            ease: Power3.easeInOut,
          },
          0
        );
    }

    TweenLite.to(actionLeft, 0.3, {
      css:{color: '#fff', opacity: 1.0 ,'pointer-events':'initial' }
    });

    console.log(index);

    if (index == 1) {
    TweenLite.to(actionRight, 0.3, {
      css:{'pointer-events':'none', color: '#fff', opacity: 0.4 }
    });
    }
  }

  actionRight.click(function (e) {
    console.log('right');
    e.preventDefault();
    const slideOut = $(".view-desktop .testimonial-one .slide"),
      slideIn = $(".view-desktop .testimonial-one .slide.active").next();
    gotoNextSlider(slideOut, slideIn);
  });

  function gotoPrevSlider(slideOut, slideIn) {
    console.log("left");

    const tl = gsap.timeline(),
      content = slideIn.find("blockquote"),
      author = slideIn.find("footer"),
      index = slideIn.index(),
      size = $(".view-desktop .testimonial-one .slide").length;

    console.log(index + "," + size);

    if (slideIn !== 0) {
      // go to prev slider
      tl
        // init out
        .set(slideOut, {
          autoAlpha: 0,
          css: {
            className: "-=slide testimonial-content",
          },
        })
        // init in
        .set(slideIn, {
          y: "-100%",
          autoAlpha: 0,
          css: {
            className: "+=slide active testimonial-content",
          },
        })
        // move out
        .to(
          slideOut,
          {
            autoAlpha: 0,
            y: "100%",
            ease: Power3.easeInOut,
          },
          0
        )
        //move in
        .to(
          slideIn,
          {
            y: "0",
            autoAlpha: 1,
            ease: Power3.easeInOut,
          },
          0
        );
    }

    TweenLite.to(actionRight, 0.3, {
      css:{color: '#fff', opacity: 1.0 ,'pointer-events':'initial' }
    });

    if (index === 0) {
    TweenLite.to(actionLeft, 0.3, {
      css:{'pointer-events':'none', color: '#fff', opacity: 0.4 }
    });
    }
  }

  actionLeft.click(function (e) {
    e.preventDefault();
    const slideOut = $(".view-desktop .testimonial-one .slide"),
      slideIn = $(".view-desktop .testimonial-one .slide.active").prev();
    gotoPrevSlider(slideOut, slideIn);
  });
}
