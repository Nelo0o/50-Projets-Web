const btnMenu = document.querySelector(".logo-menu");
const menu = document.querySelector(".liste-nav");
const allLinks = document.querySelectorAll(".item-nav");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

allLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
