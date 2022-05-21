const burger = document.querySelector(".burger-icon");
const sidebar = document.querySelector(".sidebar");
const sidebar_arrow = document.querySelector(".sidebar-arrow");
burger.addEventListener("click", () => {
  sidebar.style.left = "0%";
});
sidebar_arrow.addEventListener("click", () => {
  sidebar.style.left = "-20%";
});
