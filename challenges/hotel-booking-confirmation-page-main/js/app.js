
const copyPasswordButton = document.getElementById("copyPassword");
const wifiPassword = document.getElementById("wifiPassword");
const copyStatus = document.getElementById("copyStatus");

const sidebar = document.querySelector(".sidebar");
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("mainNavigation");

const COPY_FEEDBACK_DURATION = 2000;
const DESKTOP_MEDIA_QUERY = window.matchMedia("(min-width: 64rem)");

let copyFeedbackTimeout;

async function copyWifiPassword()
{
  const password = wifiPassword.textContent.trim();

  clearTimeout(copyFeedbackTimeout);
  copyPasswordButton.disabled = true;

  try
  {
    if (!navigator.clipboard || !window.isSecureContext)
    {
      throw new Error("Clipboard API is unavailable.");
    }

    await navigator.clipboard.writeText(password);

    copyPasswordButton.textContent = "Copied!";
    copyStatus.textContent = "WiFi password copied to clipboard.";
  }
  catch (error)
  {
    console.error("Unable to copy WiFi password:", error);

    selectWifiPassword();

    copyPasswordButton.textContent = "Try again";
    copyStatus.textContent =
      "Automatic copying failed. The password has been selected. Copy it manually using your device's copy command.";

    copyPasswordButton.disabled = false;
    scheduleCopyFeedbackReset();

    return;
  }

  scheduleCopyFeedbackReset();
}

function selectWifiPassword()
{
  const selection = window.getSelection();
  const range = document.createRange();

  range.selectNodeContents(wifiPassword);

  selection.removeAllRanges();
  selection.addRange(range);
}

function scheduleCopyFeedbackReset()
{
  copyFeedbackTimeout = window.setTimeout(
    resetCopyButton,
    COPY_FEEDBACK_DURATION
  );
}

function resetCopyButton()
{
  copyPasswordButton.textContent = "Copy";
  copyPasswordButton.disabled = false;
  copyStatus.textContent = "";
}

function toggleMobileMenu()
{
  const isOpen = sidebar.classList.contains("sidebar--open");

  setMobileMenuState(!isOpen);
}

function setMobileMenuState(isOpen)
{
  sidebar.classList.toggle("sidebar--open", isOpen);

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuButton.querySelector("span").textContent = isOpen ? "×" : "☰";
}

function closeMobileMenu({ restoreFocus = false } = {})
{
  if (!sidebar.classList.contains("sidebar--open"))
  {
    return;
  }

  setMobileMenuState(false);

  if (restoreFocus)
  {
    menuButton.focus();
  }
}

function handleMenuKeydown(event)
{
  if (event.key !== "Escape")
  {
    return;
  }

  if (!sidebar.classList.contains("sidebar--open"))
  {
    return;
  }

  event.preventDefault();
  closeMobileMenu({ restoreFocus: true });
}

function handleNavigationClick(event)
{
  const link = event.target.closest("a");

  if (!link || !navigation.contains(link))
  {
    return;
  }

  if (!DESKTOP_MEDIA_QUERY.matches)
  {
    closeMobileMenu();
  }
}

function handleViewportChange(event)
{
  if (event.matches)
  {
    closeMobileMenu();
  }
}

menuButton.addEventListener("click", toggleMobileMenu);
copyPasswordButton.addEventListener("click", copyWifiPassword);

document.addEventListener("keydown", handleMenuKeydown);
navigation.addEventListener("click", handleNavigationClick);

DESKTOP_MEDIA_QUERY.addEventListener("change", handleViewportChange);