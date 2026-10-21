const signUpSection = document.querySelector('.sign-up');
const successSection = document.querySelector('.success');
const form = document.querySelector('.form');
const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#email-error');
const submittedEmail = document.querySelector('.success__email');
const dismissButton = document.querySelector('.success__button');

function showError()
{
  form.classList.add('has-error');
  emailInput.setAttribute('aria-invalid', 'true');
  errorMessage.textContent = 'Valid email required';
  emailInput.focus();
}

function clearError()
{
  form.classList.remove('has-error');
  emailInput.removeAttribute('aria-invalid');
  errorMessage.textContent = '';
}

function showSuccess()
{
  submittedEmail.textContent = emailInput.value;
  signUpSection.hidden = true;
  successSection.hidden = false;
  dismissButton.focus();
}

form.addEventListener('submit', (event) =>
{
  event.preventDefault();
  if (!emailInput.validity.valid) {
    showError();
    return;
  }
  clearError();
  showSuccess();
});

emailInput.addEventListener('input', () =>
{
  if (emailInput.validity.valid) {
    clearError();
  }
});

dismissButton.addEventListener('click', () => {
  successSection.hidden = true;
  signUpSection.hidden = false;
  form.reset();
  clearError();
  emailInput.focus();
});
