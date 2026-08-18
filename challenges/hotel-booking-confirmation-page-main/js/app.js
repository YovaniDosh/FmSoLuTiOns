const copyPasswordButton = document.getElementById("copyPassword");
const wifiPassword = document.getElementById("wifiPassword");
const copyStatus = document.getElementById("copyStatus");
const sidebar = document.querySelector(".sidebar");
const menuButton = document.getElementById("menuButton");

const COPY_FEEDBACK_DURATION = 2000;

async function copyWifiPassword()
{
  const password = wifiPassword.textContent.trim();

  try
  {
    await navigator.clipboard.writeText(password);

    copyPasswordButton.textContent = "Copied!";
    copyPasswordButton.disabled = true;
    copyStatus.textContent = "WiFi password copied to clipboard.";

    setTimeout(resetCopyButton, COPY_FEEDBACK_DURATION);
  }
  catch (error)
  {
    console.error("Unable to copy WiFi password:", error);

    copyPasswordButton.textContent = "Error";
    copyStatus.textContent = "Unable to copy WiFi password.";
  }
}

function resetCopyButton()
{
  copyPasswordButton.textContent = "Copy";
  copyPasswordButton.disabled = false;
  copyStatus.textContent = "";
}

function toggleMobileMenu()
{
  const isOpen = sidebar.classList.toggle("sidebar--open");

  updateMenuButton(isOpen);
}

function updateMenuButton(isOpen)
{
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.querySelector("span").textContent = isOpen ? "×" : "☰";
}

menuButton.addEventListener("click", toggleMobileMenu);
copyPasswordButton.addEventListener("click", copyWifiPassword);