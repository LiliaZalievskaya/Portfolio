VANTA.RINGS({
  el: "#maingif",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 10.00,
  minWidth: 10.00,
  scale: 1.00,
  scaleMobile: 1.00
})

document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector(".header");
  setTimeout(function() {
    header.classList.add("show-header");
  });
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToTop() {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scroll(0, 0);
  }
}