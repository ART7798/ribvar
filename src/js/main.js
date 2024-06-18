const navContainer = document.querySelector(".nav-container");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");

// navToggle.addEventListener("click", () => {
//   navContainer.classList.remove("hidden");
// });
// navClose.addEventListener("click", () => {
//   navContainer.classList.add("hidden");
// });

navToggle.addEventListener("click", () => {
  navContainer.classList.remove("hidden", "slide-out");
  navContainer.classList.add("slide-in");
});

navClose.addEventListener("click", () => {
  navContainer.classList.remove("slide-in");
  navContainer.classList.add("slide-out");
  setTimeout(() => {
    navContainer.classList.add("hidden");
  }, 300); // Match the duration of the slide-out animation
});
window.addEventListener("resize", () => {
  navContainer.classList.add("hidden");
});
window.addEventListener("load", () => {

  navContainer.classList.add("hidden");
});
