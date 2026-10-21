const menuButton = document.querySelector(".navigation__toggle");
const navigationMenu = document.querySelector(".navigation__menu");
const menuLabel = menuButton.querySelector(".visually-hidden");
const desktopMedia = window.matchMedia("(min-width: 48rem)");

function setMenuState(isOpen)
{
  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigationMenu.dataset.open = String(isOpen);
  navigationMenu.inert = !isOpen && !desktopMedia.matches;
  menuLabel.textContent = isOpen
    ? "Close navigation menu"
    : "Open navigation menu";
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
});

navigationMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    setMenuState(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    setMenuState(false);
    menuButton.focus();
  }
});

desktopMedia.addEventListener("change", () => {
  setMenuState(false);
});

setMenuState(false);
