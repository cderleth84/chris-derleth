// const { format } = require("date-fns");
// console.log(format(new Date(), "yyyMMdd\tHH:mm:ss"));

const navbar = document.querySelector("nav");
let prevScrollpos = window.pageYOffset;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hide");
  } else {
    navbar.classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
});
