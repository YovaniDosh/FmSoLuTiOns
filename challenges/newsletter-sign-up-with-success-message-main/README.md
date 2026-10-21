<h1 align="center">

My Solution to the [Newsletter Sign-up Form with Success Message](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv) challenge.

</h1>

## Preview

![Project Preview](../../assets/screenshots/newform.png)

## Overview

The goal was to build a responsive newsletter sign-up form that validates an email address and displays a confirmation message after a successful submission.

The project includes:

- Newsletter benefits list.
- Email address input.
- Email validation for empty and invalid values.
- Accessible error message.
- Success message displaying the submitted email address.
- Button to dismiss the confirmation and return to the form.
- Responsive layouts for mobile, tablet, and desktop.

<div align="center">

## Links

[View Live Project](https://yovanidosh.github.io/FmSoLuTiOns/challenges/newsletter-sign-up-with-success-message-main/)

</div>

## What I Learned

In this project, I learned how to:

- Build an accessible form using an associated `<label>`.
- Validate email addresses using the native `email` input type and `validity.valid`.
- Communicate validation errors using `aria-live` and `aria-invalid`.
- Toggle between the form and confirmation message using the `hidden` attribute.
- Insert the submitted email safely using `textContent`.
- Serve responsive images using the `<picture>` element.
- Create a mobile-first layout using Flexbox and CSS Grid.
- Provide visible keyboard focus indicators with `:focus-visible`.
- Manage keyboard focus when switching between the form and success message.

## Featured Code

### Switching to the Success Message

```javascript
function showSuccess()
{
  submittedEmail.textContent = emailInput.value;
  signUpSection.hidden = true;
  successSection.hidden = false;
  dismissButton.focus();
}
```

This function displays the submitted email address, hides the form, and moves keyboard focus to the dismissal button so users can continue navigating the confirmation with the keyboard.

### Email Validation

```javascript
if (!emailInput.validity.valid) {
  showError();
  return;
}
```

The browser's native constraint validation checks whether the required email field contains a valid value, without relying on external libraries.

## Accessibility

The project includes:

- Semantic HTML and a logical heading hierarchy.
- A visible label associated with the email input.
- Dynamic error announcements using `aria-live`.
- `aria-invalid` to identify an invalid field.
- Alternative text for the informative illustration.
- Visible keyboard focus indicators.
- Focus management when switching between views.
- Support for `prefers-reduced-motion`.

## Responsive Design

On mobile:

- The illustration appears above the main content.
- The content and form use a single-column layout.
- The success message uses the available screen height and places the dismissal button at the bottom.

On tablets and desktops:

- The content appears inside a centered card.
- The illustration adapts to the available viewport width.
- The desktop layout places the text and illustration in two columns using CSS Grid.
- The success message appears inside a compact card.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Flexbox
- CSS Grid
- Media Queries
- CSS Custom Properties
- SVG

<div align="center">

## Author

[Frontend Mentor](https://www.frontendmentor.io/profile/YovaniDosh)

[LinkedIn](https://www.linkedin.com/in/johanxt/)

</div>