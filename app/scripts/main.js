console.log('Allo Allo!');

// setup variable
const slider_one = $('.testimonial-one .slide'),
  slider1 = $('.testimonial-one .slider1'),
  slider2 = $('.testimonial-one .slider2'),
  slider3 = $('.testimonial-one .slider3'),
  actionLeft = $('.testimonial-action .action-left'),
  actionRight = $('.testimonial-action .action-right'),
  active = $('.testimonial-one .active');

function init() {
  TweenLite.set(slider_one.not(active), {
    autoAlpha: 0,
  });

  TweenLite.set(actionLeft, {
    autoAlpha: 0.3,
    color: '#444',
  });

  TweenLite.set(actionRight, {
    autoAlpha: 1,
    color: '#fff',
  });
}
init();

function gotoNextSlider(slideOut, slideIn) {
  const tl = gsap.timeline(),
    content = slideIn.find('blockquote'),
    author = slideIn.find('footer'),
    index = slideIn.index(),
    size = $('.testimonial-one .slide').length;

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
          y: '-100%',
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
    autoAlpha: 1,
    color: '#fff',
  });

  console.log(index + ',' + size);

  if (index === 1 ) {
    TweenLite.to(actionRight, 0.3, {
      autoAlpha: 0,
      color: '#444',
    });
  }
}

actionRight.click(function (e) {
  e.preventDefault();
  const slideOut = $('.testimonial-one .slide'),
    slideIn = $('.testimonial-one .slide.active').next();
  gotoNextSlider(slideOut, slideIn);
});

function gotoPrevSlider(slideOut, slideIn) {
  console.log('left');

  const tl = gsap.timeline(),
    content = slideIn.find('blockquote'),
    author = slideIn.find('footer'),
    index = slideIn.index(),
    size = $('.testimonial-one .slide').length;

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
    autoAlpha: 1,
    color: 'white',
  });

  if (index === 0) {
    TweenLite.to(actionLeft, 0.3, {
      autoAlpha: 0,
    });
  }
}

actionLeft.click(function (e) {
  e.preventDefault();
  const slideOut = $('.testimonial-one .slide'),
    slideIn = $('.testimonial-one .slide.active').prev();
  gotoPrevSlider(slideOut, slideIn);
});
