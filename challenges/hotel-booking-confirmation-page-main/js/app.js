const copyPasswordButton = document.getElementById("copyPassword");
const wifiPassword = document.getElementById("wifiPassword");
const copyStatus = document.getElementById("copyStatus");
const sidebar = document.querySelector(".sidebar");
const menuButton = document.getElementById("menuButton");

async function copyWifiPassword() {
  const password =
    wifiPassword.textContent.trim();

  try {
    await navigator.clipboard.writeText(password);

    copyPasswordButton.textContent = "Copied!";
    copyStatus.textContent = "WiFi password copied to clipboard."
    copyPasswordButton.disabled = true;

    setTimeout(() => {
      copyPasswordButton.textContent = "Copy";
      copyPasswordButton.disabled = false;
    }, 2000);

  } catch (error) {
    console.error(
      "Unable to copy WiFi password:",
      error
    );

    copyPasswordButton.textContent = "Error";
  }
}

function toggleMobileMenu() {
  const isOpen =
    sidebar.classList.toggle("sidebar--open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen
      ? "Close navigation"
      : "Open navigation"
  );

  menuButton.querySelector("span").textContent =
    isOpen ? "×" : "☰";
}

menuButton.addEventListener(
  "click",
  toggleMobileMenu
);

copyPasswordButton.addEventListener(
  "click",
  copyWifiPassword
);