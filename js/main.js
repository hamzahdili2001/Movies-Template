// Main Javascript For All The Site
// NavBar
const toggler = document.querySelector(".toggler");
const exitNav = document.querySelector(".exit-nav");
const navigation = document.querySelector("header .navigation");

toggler.addEventListener("click", () => {
  toggler.classList.add("active");
  navigation.classList.add("show");
});

exitNav.addEventListener("click", () => {
  navigation.classList.remove("show");
  toggler.classList.remove("active");
});
