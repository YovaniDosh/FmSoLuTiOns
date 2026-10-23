const menuButton = document.querySelector(".navigation__toggle");
const navigationMenu = document.querySelector(".navigation__menu");
const menuLabel = menuButton?.querySelector(".visually-hidden");
const desktopMedia = window.matchMedia("(min-width: 48rem)");

function setMenuState(isOpen)
{
  if (!menuButton || !navigationMenu || !menuLabel)
  {
    return;
  }

  const shouldOpen = isOpen && !desktopMedia.matches;

  menuButton.setAttribute("aria-expanded", String(shouldOpen));
  menuButton.setAttribute(
    "aria-label",
    shouldOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuLabel.textContent = shouldOpen
    ? "Close navigation menu"
    : "Open navigation menu";

  navigationMenu.dataset.open = String(shouldOpen);
  navigationMenu.inert = !shouldOpen && !desktopMedia.matches;

  document.body.classList.toggle("menu-open", shouldOpen);
}

function toggleMenu()
{
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  setMenuState(!isOpen);
}

function handleNavigationClick(event)
{
  const link = event.target.closest("a");

  if (!link || !navigationMenu.contains(link) || desktopMedia.matches)
  {
    return;
  }

  setMenuState(false);
  menuButton.focus();
}

function handleKeydown(event)
{
  if (
    event.key !== "Escape" ||
    menuButton.getAttribute("aria-expanded") !== "true"
  )
  {
    return;
  }

  event.preventDefault();
  setMenuState(false);
  menuButton.focus();
}

function handleViewportChange(event)
{
  const activeElement = document.activeElement;
  const focusWasOnMenuButton = activeElement === menuButton;
  const focusWasInsideNavigation = navigationMenu.contains(activeElement);

  setMenuState(false);

  if (!event.matches && focusWasInsideNavigation)
  {
    menuButton.focus();
    return;
  }

  if (event.matches && focusWasOnMenuButton)
  {
    navigationMenu.querySelector("a")?.focus();
  }
}

function initializeNavigation()
{
  if (!menuButton || !navigationMenu || !menuLabel)
  {
    return;
  }

  menuButton.addEventListener("click", toggleMenu);
  navigationMenu.addEventListener("click", handleNavigationClick);
  document.addEventListener("keydown", handleKeydown);
  desktopMedia.addEventListener("change", handleViewportChange);

  setMenuState(false);
}

initializeNavigation();