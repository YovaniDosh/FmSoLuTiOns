const ageForm = document.querySelector(".age-form");
const resultElements = {
  years: document.getElementById("years-result"),
  months: document.getElementById("months-result"),
  days: document.getElementById("days-result"),
};

const fields = ["day", "month", "year"].map((name) => {
  const input = ageForm.elements[name];

  return {
    name,
    input,
    container: input.closest(".age-form__field"),
    error: document.getElementById(`${name}-error`),
  };
});

function setFieldError(field, message)
{
  field.container.classList.toggle("age-form__field--invalid", Boolean(message));
  field.input.setAttribute("aria-invalid", String(Boolean(message)));
  field.error.textContent = message;
}

function clearErrors()
{
  fields.forEach((field) => setFieldError(field, ""));
}

function getDaysInMonth(month, year)
{
  return new Date(year, month, 0).getDate();
}

function createClampedDate(year, month, day)
{
  return new Date(year, month, Math.min(day, getDaysInMonth(month + 1, year)));
}

function validateDate()
{
  clearErrors();
  const values = Object.fromEntries(fields.map((field) => [field.name, Number(field.input.value)]));
  let isValid = true;

  fields.forEach((field) => {
    if (field.input.value.trim() === "") {
      setFieldError(field, "This field is required");
      isValid = false;
    }
  });

  if (!isValid) {
    return null;
  }

  if (values.day < 1 || values.day > 31) {
    setFieldError(fields[0], "Must be a valid day");
    isValid = false;
  }

  if (values.month < 1 || values.month > 12) {
    setFieldError(fields[1], "Must be a valid month");
    isValid = false;
  }

  const today = new Date();

  if (values.year < 1 || values.year > today.getFullYear()) {
    setFieldError(fields[2], "Must be in the past");
    isValid = false;
  }

  if (!isValid) {
    return null;
  }

  const birthDate = new Date(values.year, values.month - 1, values.day);

  if (values.day > getDaysInMonth(values.month, values.year)) {
    setFieldError(fields[0], "Must be a valid date");
    return null;
  }

  if (birthDate > today) {
    setFieldError(fields[2], "Must be in the past");
    return null;
  }

  return birthDate;
}

function calculateAge(birthDate)
{
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let yearCursor = createClampedDate(
    birthDate.getFullYear() + years,
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (yearCursor > today) {
    years -= 1;
    yearCursor = createClampedDate(
      birthDate.getFullYear() + years,
      birthDate.getMonth(),
      birthDate.getDate()
    );
  }

  let months = 0;
  let monthCursor = yearCursor;
  let nextMonth = createClampedDate(
    monthCursor.getFullYear(),
    monthCursor.getMonth() + 1,
    birthDate.getDate()
  );

  while (months < 11 && nextMonth <= today) {
    months += 1;
    monthCursor = nextMonth;
    nextMonth = createClampedDate(
      monthCursor.getFullYear(),
      monthCursor.getMonth() + 1,
      birthDate.getDate()
    );
  }

  const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const cursorUtc = Date.UTC(
    monthCursor.getFullYear(),
    monthCursor.getMonth(),
    monthCursor.getDate()
  );
  const days = Math.floor((todayUtc - cursorUtc) / 86400000);

  return { years, months, days };
}

function showAge(age)
{
  Object.entries(age).forEach(([unit, value]) => {
    resultElements[unit].textContent = value;
  });
}

ageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const birthDate = validateDate();

  if (!birthDate) {
    fields.find((field) => field.input.getAttribute("aria-invalid") === "true")?.input.focus();
    return;
  }

  showAge(calculateAge(birthDate));
});

fields.forEach((field) => {
  field.input.addEventListener("input", () => setFieldError(field, ""));
});
