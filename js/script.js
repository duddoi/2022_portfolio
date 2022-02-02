const images = document.querySelectorAll('.js-lazyload-image');

const sections = document.querySelectorAll('.section');

let config = {
  rootMargin: '0px',
  threshold: 0.4
};

let observer = new IntersectionObserver((entries) => {
  // console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }

  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const current = document.querySelector('.section.active');
  const next = entry.target;
  const header = next.querySelector(".section--text");

  if (current) {
    current.classList.remove('active');
  }
  if (next) {
    next.classList.add('active');
    document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
  }
};

images.forEach(image => {
  observer.observe(image);
});

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
};
$("html").mousemove(function (e) {

  $(".pointer-circle").animate({
    left: e.pageX,
    top: e.pageY
  }, 10, "linear");
});
$(".input_switch").click(function () {
  if ($(this).is(":checked")) {
    $(this).prev(".img").css({
      "display": "none"
    });
    $(this).prev(".img").prev(".img").css({
      "display": "block"
    });
  } else {
    $(this).prev(".img").css({
      "display": "block"
    });
    $(this).prev(".img").prev(".img").css({
      "display": "none"
    });
  }
});

$(document).ready(function() {
  $(".input_switch").prev(".img").css({
    "display": "none"
  });
})