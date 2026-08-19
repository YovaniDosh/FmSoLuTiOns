const form = document.querySelector('.subscribe-form');
const email = document.querySelector('#email');
const errorMessage = document.querySelector('#email-error');

function showError() {
  form.classList.add('has-error');
  email.setAttribute('aria-invalid', 'true');
  errorMessage.textContent = 'Please provide a valid email address';
}

function clearError() {
  form.classList.remove('has-error');
  email.removeAttribute('aria-invalid');
  errorMessage.textContent = '';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!email.validity.valid) {
    showError();
    email.focus();
    return;
  }
  clearError();
  form.reset();
});

email.addEventListener('input', () => {
  if (form.classList.contains('has-error') && email.validity.valid) clearError();
});
