var nav = document.getElementById("nav");

document
  .querySelector(".navigation .header .icon")
  .addEventListener("dblclick", function (e) {
    nav.classList.toggle("active");
  });

document.getElementById("reset-menu").addEventListener("click", function () {
  nav.removeAttribute("style");
  if (!nav.classList.contains("active")) {
    nav.classList.add("active");
  }
});

document.getElementById("toggle-micro").addEventListener("click", function () {
  this.classList.toggle("active");
  nav.classList.toggle("micro");
});

$(function () {
  $(".navigation").draggable();
});
