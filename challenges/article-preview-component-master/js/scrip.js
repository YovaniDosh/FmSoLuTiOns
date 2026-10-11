const articleCard = document.querySelector('.article-card');
const shareButton = document.querySelector('.share-button');
const shareMenu = document.querySelector('#share-menu');

function closeShareMenu()
{
  shareButton.setAttribute('aria-expanded', 'false');
  shareButton.setAttribute('aria-label', 'Show sharing options');
  shareMenu.hidden = true;
}

function openShareMenu()
{
  shareButton.setAttribute('aria-expanded', 'true');
  shareButton.setAttribute('aria-label', 'Hide sharing options');
  shareMenu.hidden = false;
}

shareButton.addEventListener('click', () =>
{
  const isExpanded = shareButton.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    closeShareMenu();
    return;
  }

  openShareMenu();
});

document.addEventListener('click', (event) =>
{
  if (!articleCard.contains(event.target)) {
    closeShareMenu();
  }
});

document.addEventListener('keydown', (event) =>
{
  if (event.key === 'Escape' && !shareMenu.hidden) {
    closeShareMenu();
    shareButton.focus();
  }
});
