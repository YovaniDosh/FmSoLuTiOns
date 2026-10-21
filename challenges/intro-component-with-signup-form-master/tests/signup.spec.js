
const { test, expect } = require("@playwright/test");
const path = require("node:path");
const { pathToFileURL } = require("node:url");

const pageUrl = pathToFileURL(
  path.resolve(__dirname, "../index.html")
).href;

async function openForm(page) {
  await page.goto(pageUrl);
}

async function fillValidForm(page) {
  await page.locator("#firstName").fill("Mary Jane");
  await page.locator("#lastName").fill("Van der Berg");
  await page.locator("#email").fill("mary@example.com");
  await page.locator("#password").fill("DemoPassword123!");
}

test("shows errors when submitting an empty form", async ({ page }) => {
  await openForm(page);
  await page.locator(".signup-form__button").click();

  await expect(page.locator(".signup-form__field.has-error"))
    .toHaveCount(4);

  await expect(page.locator("#firstNameError"))
    .toHaveText("First Name cannot be empty");

  await expect(page.locator("#lastNameError"))
    .toHaveText("Last Name cannot be empty");

  await expect(page.locator("#emailError"))
    .toHaveText("Email Address cannot be empty");

  await expect(page.locator("#passwordError"))
    .toHaveText("Password cannot be empty");

  await expect(page.locator("#firstName")).toBeFocused();
});

test("rejects names containing only spaces", async ({ page }) => {
  await openForm(page);

  await page.locator("#firstName").fill("   ");
  await page.locator("#lastName").fill("   ");
  await page.locator(".signup-form__button").click();

  await expect(page.locator("#firstNameError"))
    .toHaveText("First Name cannot be empty");

  await expect(page.locator("#lastNameError"))
    .toHaveText("Last Name cannot be empty");
});

test("rejects an invalid email address", async ({ page }) => {
  await openForm(page);
  await fillValidForm(page);

  await page.locator("#email").fill("invalid-email");
  await page.locator(".signup-form__button").click();

  await expect(page.locator("#emailError"))
    .toHaveText("Looks like this is not an email");
});

test("accepts names containing internal spaces", async ({ page }) => {
  await openForm(page);
  await fillValidForm(page);

  await page.locator(".signup-form__button").click();

  await expect(page.locator(".signup-form__feedback"))
    .toHaveText(
      "Demo completed successfully. No account was created!"
    );

  await expect(page.locator("#firstName")).toHaveValue("");
  await expect(page.locator("#lastName")).toHaveValue("");
  await expect(page.locator("#email")).toHaveValue("");
  await expect(page.locator("#password")).toHaveValue("");

  await expect(page.locator(".signup-form__field.has-error"))
    .toHaveCount(0);
});

test("clears a field error when corrected", async ({ page }) => {
  await openForm(page);
  await page.locator(".signup-form__button").click();

  await expect(page.locator("#firstName"))
    .toHaveAttribute("aria-invalid", "true");

  await page.locator("#firstName").fill("Mary Jane");

  await expect(page.locator("#firstName"))
    .not.toHaveAttribute("aria-invalid", "true");

  await expect(page.locator("#firstNameError")).toBeEmpty();
});

test("clears the success message when the user edits the form", async ({ page }) => {
  await openForm(page);
  await fillValidForm(page);
  await page.locator(".signup-form__button").click();

  await expect(page.locator(".signup-form__feedback"))
    .not.toBeEmpty();

  await page.locator("#firstName").fill("Alex");

  await expect(page.locator(".signup-form__feedback")).toBeEmpty();
});

test("shows success after correcting a previous invalid submission", async ({ page }) => {
  await openForm(page);
  await page.locator(".signup-form__button").click();

  await fillValidForm(page);
  await page.locator(".signup-form__button").click();

  await expect(page.locator(".signup-form__feedback"))
    .toHaveText(
      "Demo completed successfully. No account was created!"
    );

  await expect(page.locator(".signup-form__field.has-error"))
    .toHaveCount(0);
});
