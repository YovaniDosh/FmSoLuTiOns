const form = document.querySelector(".signup-form");
const fields = [
  { input: document.getElementById("firstName"), label: "First Name" },
  { input: document.getElementById("lastName"), label: "Last Name" },
  { input: document.getElementById("email"), label: "Email Address" },
  { input: document.getElementById("password"), label: "Password" },
];

function getErrorMessage(field)
{
  if (field.input.validity.valueMissing)
  {
    return `${field.label} cannot be empty`;
  }

  if (field.input.type === "email" && field.input.validity.typeMismatch)
  {
    return "Looks like this is not an email";
  }

  return "";
}

function updateField(field)
{
  const fieldContainer = field.input.closest(".signup-form__field");
  const errorMessage = fieldContainer.querySelector(".signup-form__error");
  const message = getErrorMessage(field);
  const hasError = message !== "";

  fieldContainer.classList.toggle("has-error", hasError);
  field.input.toggleAttribute("aria-invalid", hasError);
  errorMessage.textContent = message;

  return !hasError;
}

form.addEventListener("submit", (event) =>
{
  event.preventDefault();
  const fieldsAreValid = fields.map(updateField).every(Boolean);

  if (!fieldsAreValid)
  {
    fields.find((field) => field.input.hasAttribute("aria-invalid")).input.focus();
    return;
  }

  form.reset();
});

fields.forEach((field) =>
{
  field.input.addEventListener("input", () =>
  {
    if (field.input.hasAttribute("aria-invalid"))
    {
      updateField(field);
    }
  });
});
