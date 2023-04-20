// Get the navbar element
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// window.addEventListener("scroll", function () {
//   const parallax = document.querySelector(".parallax");
//   let scrollPosition = window.pageYOffset;
//   parallax.querySelector(
//     ".parallax__background"
//   ).style.transform = `translateY(${scrollPosition * 0.5}px)`;
// });
