const navBtn = document.querySelector(".nav-button");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.body;

navBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click");
  toggleNav();
});

window.addEventListener("click", function () {
  if (body.classList.contains("no-scroll")) {
    toggleNav();
  }
});

mobileNav.addEventListener("click", function (e) {
  e.stopPropagation();
});

function toggleNav() {
  console.log("toggleNav");

  body.classList.toggle("no-scroll");
  navBtn.classList.toggle("nav-button-close");
  mobileNav.classList.toggle("mobile-nav-active");
}
