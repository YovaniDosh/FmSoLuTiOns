const contactForm = document.querySelector('.contact-form');
const successMessage = document.querySelector('.success-message');
const textFields = [
  {
    input: document.getElementById('first-name'),
    error: document.getElementById('first-name-error'),
    message: 'This field is required',
  },
  {
    input: document.getElementById('last-name'),
    error: document.getElementById('last-name-error'),
    message: 'This field is required',
  },
  {
    input: document.getElementById('email'),
    error: document.getElementById('email-error'),
    message: 'Please enter a valid email address',
  },
  {
    input: document.getElementById('message'),
    error: document.getElementById('message-error'),
    message: 'This field is required',
  },
];
const queryInputs = [...document.querySelectorAll('input[name="queryType"]')];
const queryError = document.getElementById('query-error');
const consentInput = document.getElementById('consent');
const consentError = document.getElementById('consent-error');

function showError(input, error, message) {
  input.setAttribute('aria-invalid', 'true');
  error.textContent = message;
  error.hidden = false;
}

function clearError(input, error) {
  input.removeAttribute('aria-invalid');
  error.hidden = true;
}

function validateTextField(field) {
  const value = field.input.value.trim();
  const isValid = field.input.type === 'email'
    ? value !== '' && field.input.validity.valid
    : value !== '';

  if (!isValid) {
    const errorMessage = field.input.type === 'email' && value === ''
      ? 'This field is required'
      : field.message;

    showError(field.input, field.error, errorMessage);
    return false;
  }

  clearError(field.input, field.error);
  return true;
}

function validateQueryType() {
  const isValid = queryInputs.some((input) => input.checked);

  queryInputs.forEach((input) => {
    if (isValid) {
      input.removeAttribute('aria-invalid');
    } else {
      input.setAttribute('aria-invalid', 'true');
    }
  });
  queryError.hidden = isValid;
  return isValid;
}

function validateConsent() {
  const isValid = consentInput.checked;

  if (!isValid) {
    showError(consentInput, consentError, 'To submit this form, please consent to being contacted');
    return false;
  }

  clearError(consentInput, consentError);
  return true;
}

textFields.forEach((field) => {
  field.input.addEventListener('input', () => clearError(field.input, field.error));
});

queryInputs.forEach((input) => {
  input.addEventListener('change', () => {
    queryInputs.forEach((queryInput) => queryInput.removeAttribute('aria-invalid'));
    queryError.hidden = true;
  });
});

consentInput.addEventListener('change', () => clearError(consentInput, consentError));

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  successMessage.hidden = true;

  const textResults = textFields.map(validateTextField);
  const isQueryValid = validateQueryType();
  const isConsentValid = validateConsent();
  const isFormValid = textResults.every(Boolean) && isQueryValid && isConsentValid;

  if (!isFormValid) {
    contactForm.querySelector('[aria-invalid="true"]').focus();
    return;
  }

  contactForm.reset();
  successMessage.hidden = false;
  successMessage.focus();
});
