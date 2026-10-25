
"use strict";

const products = [
  { name: "Waffle with Berries", category: "Waffle", price: 6.5, image: "waffle" },
  { name: "Vanilla Bean Crème Brûlée", category: "Crème Brûlée", price: 7, image: "creme-brulee" },
  { name: "Macaron Mix of Five", category: "Macaron", price: 8, image: "macaron" },
  { name: "Classic Tiramisu", category: "Tiramisu", price: 5.5, image: "tiramisu" },
  { name: "Pistachio Baklava", category: "Baklava", price: 4, image: "baklava" },
  { name: "Lemon Meringue Pie", category: "Pie", price: 5, image: "meringue" },
  { name: "Red Velvet Cake", category: "Cake", price: 4.5, image: "cake" },
  { name: "Salted Caramel Brownie", category: "Brownie", price: 4.5, image: "brownie" },
  { name: "Vanilla Panna Cotta", category: "Panna Cotta", price: 6.5, image: "panna-cotta" },
];

const cart = new Map();

const productGrid = document.getElementById("productGrid");
const cartContent = document.getElementById("cartContent");
const cartCount = document.getElementById("cartCount");
const confirmationDialog = document.getElementById("confirmationDialog");
const confirmationSummary = document.getElementById("confirmationSummary");
const newOrderButton = document.getElementById("newOrderButton");
const catalogTitle = document.getElementById("catalog-title");

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function escapeHTML(value)
{
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function getImagePath(image, size)
{
  return `../../assets/images/image-${image}-${size}.jpg`;
}

function isValidProductIndex(index)
{
  return Number.isInteger(index) && index >= 0 && index < products.length;
}

function getQuantity(productIndex)
{
  return cart.get(productIndex) ?? 0;
}

function renderProducts()
{
  productGrid.innerHTML = products.map((product, index) => {
    const quantity = getQuantity(index);
    const safeName = escapeHTML(product.name);
    const safeCategory = escapeHTML(product.category);
    const safePrice = currency.format(product.price);
    const controls = quantity === 0
      ? `
        <button class="product-card__control product-card__add" type="button" data-action="add" data-index="${index}">
          <img src="../../assets/images/icon-add-to-cart.svg" alt="" width="21" height="20">
          Add to Cart
        </button>`
      : `
        <div class="product-card__control product-card__quantity" role="group" aria-label="Quantity for ${safeName}">
          <button class="quantity-button" type="button" data-action="decrease" data-index="${index}" aria-label="Decrease ${safeName} quantity">−</button>
          <span aria-live="polite" aria-atomic="true">${quantity}</span>
          <button class="quantity-button" type="button" data-action="increase" data-index="${index}" aria-label="Increase ${safeName} quantity">+</button>
        </div>`;

    return `
      <article class="product-card${quantity > 0 ? " is-selected" : ""}">
        <div class="product-card__image-wrap">
          <picture>
            <source media="(min-width: 64rem)" srcset="${getImagePath(product.image, "desktop")}">
            <source media="(min-width: 40rem)" srcset="${getImagePath(product.image, "tablet")}">
            <img class="product-card__image" src="${getImagePath(product.image, "mobile")}" alt="${safeName}" loading="lazy" decoding="async">
          </picture>
          ${controls}
        </div>
        <p class="product-card__category">${safeCategory}</p>
        <h2 class="product-card__title">${safeName}</h2>
        <p class="product-card__price">${safePrice}</p>
      </article>`;
  }).join("");
}

function getCartItems()
{
  return [...cart.entries()].map(([index, quantity]) => ({
    ...products[index],
    index,
    quantity,
  }));
}

function getOrderTotal(items)
{
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCart()
{
  const items = getCartItems();
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  cartCount.textContent = totalQuantity;

  if (items.length === 0)
  {
    cartContent.innerHTML = `
      <div class="cart__empty">
        <img src="../../assets/images/illustration-empty-cart.svg" alt="" width="128" height="128">
        <p>Your added items will appear here</p>
      </div>`;

    return;
  }

  const listItems = items.map((item) => {
    const safeName = escapeHTML(item.name);
    const itemTotal = currency.format(item.price * item.quantity);

    return `
      <li class="cart__item">
        <div>
          <strong>${safeName}</strong>
          <span class="cart__details">
            <span class="cart__quantity">${item.quantity}x</span>
            @ ${currency.format(item.price)}
            <span class="cart__item-total">${itemTotal}</span>
          </span>
        </div>
        <button class="cart__remove" type="button" data-action="remove" data-index="${item.index}" aria-label="Remove ${safeName} from cart">×</button>
      </li>`;
  }).join("");

  cartContent.innerHTML = `
    <ul class="cart__list">${listItems}</ul>
    <div class="order-total">
      <span>Order Total</span>
      <strong>${currency.format(getOrderTotal(items))}</strong>
    </div>
    <p class="carbon-note">
      <img src="../../assets/images/icon-carbon-neutral.svg" alt="" width="21" height="20">
      This is a <strong>carbon-neutral</strong> delivery
    </p>
    <button class="primary-button" type="button" data-action="confirm">Confirm Order</button>`;
}

function updateCart(productIndex, change)
{
  if (!isValidProductIndex(productIndex) || !Number.isInteger(change) || change === 0)
  {
    return;
  }

  const quantity = Math.max(0, getQuantity(productIndex) + change);

  if (quantity === 0)
  {
    cart.delete(productIndex);
  }
  else
  {
    cart.set(productIndex, quantity);
  }

  renderProducts();
  renderCart();
}

function showConfirmation()
{
  const items = getCartItems();

  if (items.length === 0 || confirmationDialog.open)
  {
    return;
  }

  const listItems = items.map((item) => {
    const safeName = escapeHTML(item.name);

    return `
      <li class="confirmation__item">
        <img src="${getImagePath(item.image, "thumbnail")}" alt="" width="48" height="48">
        <div>
          <strong>${safeName}</strong>
          <span class="cart__details">
            <span class="cart__quantity">${item.quantity}x</span>
            @ ${currency.format(item.price)}
          </span>
        </div>
        <strong>${currency.format(item.price * item.quantity)}</strong>
      </li>`;
  }).join("");

  confirmationSummary.innerHTML = `
    <ul class="confirmation__list">${listItems}</ul>
    <div class="order-total">
      <span>Order Total</span>
      <strong>${currency.format(getOrderTotal(items))}</strong>
    </div>`;

  confirmationDialog.showModal();
}

function handleAction(event)
{
  const control = event.target.closest("button[data-action]");

  if (!control)
  {
    return;
  }

  const actionName = control.dataset.action;
  const productIndex = Number(control.dataset.index);

  const actions = {
    add: () => updateCart(productIndex, 1),
    increase: () => updateCart(productIndex, 1),
    decrease: () => updateCart(productIndex, -1),
    remove: () => updateCart(productIndex, -getQuantity(productIndex)),
    confirm: showConfirmation,
  };

  if (!Object.hasOwn(actions, actionName))
  {
    return;
  }

  if (actionName !== "confirm" && !isValidProductIndex(productIndex))
  {
    return;
  }

  actions[actionName]();
}

function startNewOrder()
{
  cart.clear();
  confirmationDialog.close();
  renderProducts();
  renderCart();
  catalogTitle.focus();
}

productGrid.addEventListener("click", handleAction);
cartContent.addEventListener("click", handleAction);
newOrderButton.addEventListener("click", startNewOrder);

renderProducts();
renderCart();
