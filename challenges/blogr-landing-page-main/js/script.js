const menuToggle = document.querySelector(".navigation__toggle");
const menu = document.getElementById("navigation-menu");
const menuIcon = menuToggle.querySelector("img");
const menuLabel = menuToggle.querySelector("span");
const groupButtons = document.querySelectorAll(".nav-group__button");
const desktopMedia = window.matchMedia("(min-width: 64rem)");

function closeGroups(exceptButton)
{
  groupButtons.forEach((button) => {
    if (button !== exceptButton)
    {
      button.setAttribute("aria-expanded", "false");
    }
  });
}

function setMenu(open)
{
  menuToggle.setAttribute("aria-expanded", String(open));
  menu.toggleAttribute("inert", !open && !desktopMedia.matches);
  menuIcon.src = open
    ? "../../assets/images/blogr-icon-close.svg"
    : "../../assets/images/blogr-icon-hamburger.svg";
  menuLabel.textContent = open ? "Close menu" : "Open menu";

  if (!open)
  {
    closeGroups();
  }
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") === "false");
});

groupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "false";
    closeGroups(button);
    button.setAttribute("aria-expanded", String(open));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape")
  {
    setMenu(false);
    menuToggle.focus();
  }
});

desktopMedia.addEventListener("change", (event) => {
  menu.toggleAttribute("inert", !event.matches);
  if (event.matches)
  {
    setMenu(false);
    menu.removeAttribute("inert");
  }
});

menu.toggleAttribute("inert", !desktopMedia.matches);
