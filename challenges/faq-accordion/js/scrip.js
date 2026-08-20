const accordion = document.querySelector('.accordion');
const accordionButtons = [...accordion.querySelectorAll('.accordion__button')];
const plusIcon = '../../assets/images/faq-icon-plus.svg';
const minusIcon = '../../assets/images/faq-icon-minus.svg';

function closeItem(button)
{
  const panel = document.querySelector(`#${button.getAttribute('aria-controls')}`);
  const icon = button.querySelector('.accordion__icon');

  button.setAttribute('aria-expanded', 'false');
  panel.hidden = true;
  icon.src = plusIcon;
}

function openItem(button)
{
  const panel = document.querySelector(`#${button.getAttribute('aria-controls')}`);
  const icon = button.querySelector('.accordion__icon');

  button.setAttribute('aria-expanded', 'true');
  panel.hidden = false;
  icon.src = minusIcon;
}

accordion.addEventListener('click', (event) =>
{
  const selectedButton = event.target.closest('.accordion__button');

  if (!selectedButton) {
    return;
  }

  const isExpanded = selectedButton.getAttribute('aria-expanded') === 'true';

  accordionButtons.forEach((button) =>
  {
    if (button !== selectedButton) {
      closeItem(button);
    }
  });

  if (isExpanded) {
    closeItem(selectedButton);
    return;
  }

  openItem(selectedButton);
});
