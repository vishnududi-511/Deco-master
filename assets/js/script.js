let menubox = document.querySelector(".menubox");
let navitems = document.querySelector(".nav_items");

menubox.addEventListener("click", function () {
  navitems.classList.toggle("active");
});
