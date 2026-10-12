const menuToggle = document.querySelector(".navigation__toggle");
const menu = document.getElementById("navigation-menu");
const menuIcon = menuToggle.querySelector("img");
const menuLabel = menuToggle.querySelector("span");
const desktopMedia = window.matchMedia("(min-width: 64rem)");

function setMenu(open)
{
  menuToggle.setAttribute("aria-expanded", String(open));
  menu.toggleAttribute("inert", !open && !desktopMedia.matches);
  document.body.classList.toggle("menu-open", open);
  menuIcon.src = open
    ? "../../assets/images/insure-icon-close.svg"
    : "../../assets/images/insure-icon-hamburger.svg";
  menuLabel.textContent = open ? "Close menu" : "Open menu";
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") === "false");
});

menu.addEventListener("click", (event) => {
  if (event.target.matches("a") && !desktopMedia.matches)
  {
    setMenu(false);
  }
});

desktopMedia.addEventListener("change", () => {
  setMenu(false);
});

menu.toggleAttribute("inert", !desktopMedia.matches);
