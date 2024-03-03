const navBtn = document.querySelector(".nav-button");
const mobileNav = document.querySelector(".mobile-nav");

navBtn.addEventListener("click", function () {
  console.log("click");
  mobileNav.classList.toggle("mobile-nav-active");
  navBtn.classList.toggle("nav-button-close");
});
