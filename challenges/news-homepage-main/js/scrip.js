
const menuButton = document.querySelector(".site-header__menu-button");
const closeButton = document.querySelector(".site-navigation__close");
const menuOverlay = document.querySelector(".site-header__overlay");
const navigation = document.querySelector(".site-navigation");
const navigationLinks = navigation.querySelectorAll("a");
const desktopMediaQuery = window.matchMedia("(min-width: 48rem)");

function setMenuState(isOpen, { restoreFocus = true } = {})
{
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));

  const menuLabel = isOpen ? "Close navigation" : "Open navigation";

  menuButton.setAttribute("aria-label", menuLabel);
  menuButton.querySelector(".visually-hidden").textContent = menuLabel;

  navigation.inert = !isOpen && !desktopMediaQuery.matches;

  if (isOpen) {
    closeButton.focus();
  } else if (restoreFocus && !desktopMediaQuery.matches) {
    menuButton.focus();
  }
}

function openMenu()
{
  setMenuState(true);
}

function closeMenu(options = {})
{
  setMenuState(false, options);
}

menuButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", () => {
  closeMenu();
});

menuOverlay.addEventListener("click", () => {
  closeMenu();
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu({ restoreFocus: false });
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
    closeMenu();
  }
});

navigation.addEventListener("keydown", (event) => {
  if (event.key !== "Tab" || !document.body.classList.contains("menu-open")) {
    return;
  }

  const focusableElements = [closeButton, ...navigationLinks];
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

desktopMediaQuery.addEventListener("change", (event) => {
  if (event.matches || document.body.classList.contains("menu-open")) {
    closeMenu({ restoreFocus: false });
  } else {
    setMenuState(false, { restoreFocus: false });
  }
});

setMenuState(false, { restoreFocus: false });
