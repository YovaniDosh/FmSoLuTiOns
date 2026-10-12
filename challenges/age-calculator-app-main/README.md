<div align="center">

<h1 align="center">
  My Solution to the <a href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q">Age Calculator App</a> Challenge
</h1>

## Preview

![Age Calculator App project preview](../../assets/screenshots/calculatorAge.png)

## Links

[View Live Project](https://yovanidosh.github.io/FmSoLuTiOns/challenges/age-calculator-app-main/)

## Technologies Used

</div>

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Media Queries
- CSS Custom Properties

<div align="center">

## Overview

</div>

The goal was to build a responsive age calculator that validates a date of birth and displays the exact age in years, months, and days.

The interface includes:

- Numeric input fields for day, month, and year.
- Specific error messages for empty fields and invalid dates.
- Results updated after submitting a valid date.
- A responsive layout for mobile and desktop screens.

<div align="center">

## What I Learned

</div>

- How to validate actual calendar dates rather than checking numeric ranges alone.
- How to calculate age while accounting for months and days that have not yet been completed.
- How to associate error messages with their respective fields using `aria-describedby`.
- How to announce dynamic results using an `aria-live` region.
- How to manage focus when a form contains validation errors.

<div align="center">

## Featured Code

</div>

```javascript

while (months < 11 && nextMonth <= today) {
  months += 1;
  monthCursor = nextMonth;
  nextMonth = createClampedDate(
    monthCursor.getFullYear(),
    monthCursor.getMonth() + 1,
    birthDate.getDate()
  );
}
```

This calculation advances through complete months without generating nonexistent dates, then calculates the remaining days. Clamping dates helps handle months with different lengths, avoiding the delightful calendar chaos that otherwise appears around dates such as January 31.

<div align="center">

## Accessibility

</div>

- Semantic form structure with properly associated labels.
- Error messages linked through `aria-describedby` and `aria-invalid`.
- Dynamic results announced through `aria-live`.
- Automatic focus on the first invalid field.
- Interactive states using `:hover`, `:active`, and `:focus-visible`.

<div align="center">

## Responsive Design

</div>

On mobile screens, the input fields share the available width, and the button is centered above the divider. On desktop screens, the card provides more spacing, the button aligns to the right, and the displayed result uses larger typography.

<div align="center">

## Author

[Frontend Mentor](https://www.frontendmentor.io/profile/YovaniDosh)

[LinkedIn](https://www.linkedin.com/in/johanxt/)

</div>