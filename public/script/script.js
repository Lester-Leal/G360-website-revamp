const body = document.body,
  scrollWrap = document.querySelector("body");
(height = scrollWrap.getBoundingClientRect().height - 1), (speed = 0.08);

var offsets = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offsets += (window.pageYOffset - offsets) * speed;

  var scroll = "translateY(-" + offsets + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
