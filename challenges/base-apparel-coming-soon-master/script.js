const form = document.querySelector(".subscription-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("emailError");

function showError()
{
  form.classList.add("has-error");
  emailInput.setAttribute("aria-invalid", "true");
  errorMessage.textContent = "Please provide a valid email";
}

function clearError()
{
  form.classList.remove("has-error");
  emailInput.removeAttribute("aria-invalid");
  errorMessage.textContent = "";
}

form.addEventListener("submit", (event) =>
{
  event.preventDefault();

  if (!emailInput.validity.valid)
  {
    showError();
    emailInput.focus();
    return;
  }

  clearError();
  form.reset();
});

emailInput.addEventListener("input", () =>
{
  if (form.classList.contains("has-error") && emailInput.validity.valid)
  {
    clearError();
  }
});
