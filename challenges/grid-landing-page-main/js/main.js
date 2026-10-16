
const menuButton = document.getElementById("menuButton");
const menuIcon = document.getElementById("menuIcon");
const menuOverlay = document.getElementById("menuOverlay");
const navigation = document.getElementById("navigation");

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

  if (isOpen)
  {
    const firstLink = navigation.querySelector("a");
    firstLink?.focus();
  }
  else
  {
    menuButton.focus();
  }
}

function toggleMenu()
{
  const isOpen = !document.body.classList.contains("menu-open");

  updateMenuState(isOpen);
}

function closeMenu()
{
  if (document.body.classList.contains("menu-open"))
  {
    updateMenuState(false);
  }
}

menuButton.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", closeMenu);
navigation.addEventListener("click", (event) =>
{
  if (event.target.closest("a"))
  {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) =>
{
  if (event.key === "Escape")
  {
    closeMenu();
  }
});
