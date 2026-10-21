
const form = document.querySelector(".signup-form");
const feedback = form.querySelector(".signup-form__feedback");

const fields = [
  { input: document.getElementById("firstName"), label: "First Name" },
  { input: document.getElementById("lastName"), label: "Last Name" },
  { input: document.getElementById("email"), label: "Email Address" },
  { input: document.getElementById("password"), label: "Password" },
];

function getErrorMessage(field)
{
  const { input, label } = field;

  if (
    input.validity.valueMissing ||
    (
      (input.name === "firstName" || input.name === "lastName") &&
      input.value.trim() === ""
    )
  )
  {
    return `${label} cannot be empty`;
  }

  if (input.type === "email" && input.validity.typeMismatch)
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

  if (hasError)
  {
    field.input.setAttribute("aria-invalid", "true");
  }
  else
  {
    field.input.removeAttribute("aria-invalid");
  }

  errorMessage.textContent = message;

  return !hasError;
}

form.addEventListener("submit", (event) =>
{
  event.preventDefault();

  const fieldsAreValid = fields.map(updateField).every(Boolean);

  if (!fieldsAreValid)
  {
    fields.find((field) =>
      field.input.hasAttribute("aria-invalid")
    ).input.focus();

    return;
  }

  feedback.textContent =
    "Demo completed successfully. No account was created!";

  form.reset();
});

fields.forEach((field) =>
{
  field.input.addEventListener("input", () =>
  {
    feedback.textContent = "";

    if (field.input.hasAttribute("aria-invalid"))
    {
      updateField(field);
    }
  });
});
