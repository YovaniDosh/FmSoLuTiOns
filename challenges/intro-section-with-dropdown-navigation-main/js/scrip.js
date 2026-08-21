const menuButton = document.querySelector('.site-header__menu-button');
const closeButton = document.querySelector('.site-navigation__close');
const menuOverlay = document.querySelector('.site-header__overlay');
const navigation = document.querySelector('.site-navigation');
const navigationLinks = navigation.querySelectorAll('a');
const dropdownButtons = document.querySelectorAll('.dropdown__button');
const desktopMediaQuery = window.matchMedia('(min-width: 56rem)');

function setDropdownState(button, isOpen) {
  const menuId = button.getAttribute('aria-controls');
  const menu = document.getElementById(menuId);
  const arrow = button.querySelector('.dropdown__arrow');

  button.setAttribute('aria-expanded', String(isOpen));
  menu.hidden = !isOpen;
  arrow.src = isOpen
    ? '../../assets/images/icon-arrow-up.svg'
    : '../../assets/images/icon-arrow-down.svg';
}

function closeDropdowns() {
  dropdownButtons.forEach((button) => setDropdownState(button, false));
}

function openMenu() {
  document.body.classList.add('menu-open');
  menuButton.setAttribute('aria-expanded', 'true');
  closeButton.focus();
}

function closeMenu({ restoreFocus = true } = {}) {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  closeDropdowns();

  if (restoreFocus) {
    menuButton.focus();
  }
}

dropdownButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    setDropdownState(button, !isOpen);
  });
});

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', () => closeMenu());
menuOverlay.addEventListener('click', () => closeMenu());

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (document.body.classList.contains('menu-open')) {
      closeMenu({ restoreFocus: false });
    } else {
      closeDropdowns();
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    closeDropdowns();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') {
    return;
  }

  const openDropdown = document.querySelector('.dropdown__button[aria-expanded="true"]');

  if (openDropdown) {
    closeDropdowns();
    openDropdown.focus();
    return;
  }

  if (document.body.classList.contains('menu-open')) {
    closeMenu();
  }
});

navigation.addEventListener('keydown', (event) => {
  if (!document.body.classList.contains('menu-open')) {
    return;
  }

  const focusableElements = [closeButton, ...dropdownButtons, ...navigationLinks];
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab' && event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  }

  if (event.key === 'Tab' && !event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
});

desktopMediaQuery.addEventListener('change', (event) => {
  if (event.matches && document.body.classList.contains('menu-open')) {
    closeMenu({ restoreFocus: false });
  }
});
