const menuButton = document.getElementById("menuButton");
const menuIcon = document.getElementById("menuIcon");
const menuOverlay = document.getElementById("menuOverlay");

const MENU_ICON = "../../assets/images/icon-menu2.svg";
const CLOSE_ICON = "../../assets/images/icon-close2.svg";

function updateMenuState(isOpen)
{
  document.body.classList.toggle("menu-open", isOpen);

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuIcon.src = isOpen ? CLOSE_ICON : MENU_ICON;
}

function toggleMenu()
{
  const isOpen = !document.body.classList.contains("menu-open");

  updateMenuState(isOpen);
}

function closeMenu()
{
  updateMenuState(false);
}

menuButton.addEventListener("click", toggleMenu);

menuOverlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) =>
{
  if (event.key === "Escape")
  {
    closeMenu();
  }
});