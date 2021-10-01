var nav = document.getElementById("nav"),
  navIcon = document.querySelector(".navigation .header .icon"),
  navItems = document.querySelectorAll(".navigation .item-list .item");

navIcon.addEventListener("click", function (e) {
  nav.classList.toggle("micro");
  var clsList = navIcon.children[0].classList;

  if (nav.classList.contains("micro")) {
    clsList.replace("fa-times", "fa-bars");
  } else {
    clsList.replace("fa-bars", "fa-times");
  }
});

navItems.forEach(function (item, idx) {
  item.addEventListener("click", function (e) {
    removeActive();
    document.getElementById("selectedPage").innerHTML =
      item.getAttribute("data-text");
    document.getElementById("pageIcon").className =
      item.children[0].children[0].classList.value;

    item.classList.add("active");
  });
});

function removeActive() {
  navItems.forEach(function (item, idx) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  });
}
