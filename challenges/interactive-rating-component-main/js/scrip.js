const ratingForm = document.querySelector('.rating-form');
const ratingCard = document.querySelector('.rating-card');
const thankYouCard = document.querySelector('.thank-you-card');
const ratingOutput = document.querySelector('.thank-you-card__rating');

ratingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const selectedRating = ratingForm.elements.rating.value;

  if (!selectedRating) {
    return;
  }

  ratingOutput.value = selectedRating;
  ratingCard.hidden = true;
  thankYouCard.hidden = false;
  thankYouCard.focus();
});
