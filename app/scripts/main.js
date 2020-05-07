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

if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js";
  document.body.appendChild(script);
}

// menu transition and action on click
const body = document.body,
  headerMenu = gsap.timeline({ paused: true });
headerMenu.to(".menu--icon span:first-child", 0.035, {
  opacity: 1,
  rotation: 30,
  ease: Power4.easeOut,
});

headerMenu.to(".menu--icon span:last-child", 0.0354, {
  opacity: 1,
  rotation: -30,
  y: -24,
  ease: Power4.easeOut,
});

headerMenu.to(".menu--item__content", 0.3, {
  top: 0,
  visibility: "visible",
  height: "auto",
  x: 0,
  y: 0,
  opacity: 1,
  ease: Expo.Power3,
});

headerMenu.staggerFrom(
  ".menu--item__content-link",
  0.3,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  "-=0.35"
);

headerMenu.staggerFrom(
  ".menu--secondary",
  0.3,
  {
    y: -30,
    opacity: 0,
    ease: Expo.easeIn,
  },
  "+=0.35"
);

headerMenu.staggerFrom(
  ".lead-me-out__link li",
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
$(document).on("click", ".trigger-menu", function () {
  body.classList.toggle("menu--open");
  headerMenu.reversed(!headerMenu.reversed());
});

/* accordion begin */
$(".accordion-group .accordion-menu").click(playAnimation);
function playAnimation(event) {
  event.preventDefault();

  const group = $(this).parent(),
    content = $(".accordion-content");

  group.toggleClass("active").siblings().removeClass("active");
}

var c,
  currentScrollTop = 0,
  navbar = $("header");

$(window).scroll(function () {
  var a = $(window).scrollTop();
  var b = navbar.height();

  currentScrollTop = a;

  if (c < currentScrollTop && a > b + b) {
    navbar.addClass("scrollUp");
    navbar.removeClass("scrollDown");
  } else if (c > currentScrollTop && !(a <= b)) {
    navbar.removeClass("scrollUp");
    navbar.addClass("scrollDown");
  }
  c = currentScrollTop;
});
