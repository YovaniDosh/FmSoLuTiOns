const menuButton = document.querySelector('.site-header__menu-button');
const closeButton = document.querySelector('.site-navigation__close');
const menuOverlay = document.querySelector('.site-header__overlay');
const navigation = document.querySelector('.site-navigation');
const navigationLinks = document.querySelectorAll('.site-navigation a');
const desktopMediaQuery = window.matchMedia('(min-width: 48rem)');

function openMenu() {
  document.body.classList.add('menu-open');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.querySelector('.visually-hidden').textContent = 'Navigation open';
  closeButton.focus();
}

function closeMenu({ restoreFocus = true } = {}) {
  document.body.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.visually-hidden').textContent = 'Open navigation';

  if (restoreFocus) {
    menuButton.focus();
  }
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', () => closeMenu());
menuOverlay.addEventListener('click', () => closeMenu());

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => closeMenu({ restoreFocus: false }));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    closeMenu();
  }
});

navigation.addEventListener('keydown', (event) => {
  if (!document.body.classList.contains('menu-open')) {
    return;
  }

  if (event.key === 'Tab' && event.shiftKey && document.activeElement === closeButton) {
    event.preventDefault();
    navigationLinks[navigationLinks.length - 1].focus();
  }

  if (event.key === 'Tab' && !event.shiftKey && document.activeElement === navigationLinks[navigationLinks.length - 1]) {
    event.preventDefault();
    closeButton.focus();
  }
});

desktopMediaQuery.addEventListener('change', (event) => {
  if (event.matches && document.body.classList.contains('menu-open')) {
    closeMenu({ restoreFocus: false });
  }
});
