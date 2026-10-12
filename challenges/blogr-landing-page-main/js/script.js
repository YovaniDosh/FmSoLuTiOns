const menuToggle = document.querySelector(".navigation__toggle");
const menu = document.getElementById("navigation-menu");
const menuIcon = menuToggle.querySelector("img");
const menuLabel = menuToggle.querySelector("span");
const groupButtons = document.querySelectorAll(".nav-group__button");
const desktopMedia = window.matchMedia("(min-width: 64rem)");

function closeGroups(exceptButton = null)
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
  const open = menuToggle.getAttribute("aria-expanded") === "false";
  setMenu(open);
});

groupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "false";
    closeGroups(button);
    button.setAttribute("aria-expanded", String(open));
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape")
  {
    return;
  }

  const expandedGroup = document.querySelector(
    '.nav-group__button[aria-expanded="true"]'
  );

  if (expandedGroup)
  {
    expandedGroup.setAttribute("aria-expanded", "false");
    expandedGroup.focus();
    return;
  }

  if (!desktopMedia.matches && menuToggle.getAttribute("aria-expanded") === "true")
  {
    setMenu(false);
    menuToggle.focus();
  }
});

desktopMedia.addEventListener("change", () => {
  setMenu(false);
});

setMenu(false);
