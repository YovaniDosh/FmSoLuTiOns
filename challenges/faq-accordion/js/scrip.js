const accordion = document.querySelector(".accordion");
const accordionButtons = [
  ...accordion.querySelectorAll(".accordion__button")
];

const plusIcon = "../../assets/images/faq-icon-plus.svg";
const minusIcon = "../../assets/images/faq-icon-minus.svg";

function setItemState(button, isOpen)
{
  const panelId = button.getAttribute("aria-controls");
  const panel = accordion.querySelector(`#${panelId}`);
  const icon = button.querySelector(".accordion__icon");

  if (!panel || !icon) {
    return;
  }

  button.setAttribute("aria-expanded", String(isOpen));
  panel.hidden = !isOpen;
  icon.src = isOpen ? minusIcon : plusIcon;
}

accordion.addEventListener("click", (event) =>
{
  const selectedButton = event.target.closest(".accordion__button");

  if (!selectedButton || !accordion.contains(selectedButton)) {
    return;
  }

  const isExpanded =
    selectedButton.getAttribute("aria-expanded") === "true";

  accordionButtons.forEach((button) =>
  {
    if (button !== selectedButton) {
      setItemState(button, false);
    }
  });

  setItemState(selectedButton, !isExpanded);
});