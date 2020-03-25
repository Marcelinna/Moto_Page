const burger_icon = document.querySelector(".burger-icon");
const nav_items = document.querySelector(".nav-items");

burger_icon.addEventListener("click", showMenu);

function showMenu() {
  nav_items.classList.toggle("mobile-show");
  console.log(nav_items);
}
