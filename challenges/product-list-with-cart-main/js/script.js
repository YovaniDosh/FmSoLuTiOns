const products = [
  { name: "Waffle with Berries",       category: "Waffle",       price: 6.5,  image: "waffle" },
  { name: "Vanilla Bean Crème Brûlée", category: "Crème Brûlée", price: 7,    image: "creme-brulee" },
  { name: "Macaron Mix of Five",       category: "Macaron",      price: 8,    image: "macaron" },
  { name: "Classic Tiramisu",          category: "Tiramisu",     price: 5.5,  image: "tiramisu" },
  { name: "Pistachio Baklava",         category: "Baklava",      price: 4,    image: "baklava" },
  { name: "Lemon Meringue Pie",        category: "Pie",          price: 5,    image: "meringue" },
  { name: "Red Velvet Cake",           category: "Cake",         price: 4.5,  image: "cake" },
  { name: "Salted Caramel Brownie",    category: "Brownie",      price: 4.5,  image: "brownie" },
  { name: "Vanilla Panna Cotta",       category: "Panna Cotta",  price: 6.5,  image: "panna-cotta" },
];

const cart = new Map();
const productGrid = document.getElementById("productGrid");
const cartContent = document.getElementById("cartContent");
const cartCount = document.getElementById("cartCount");
const confirmationDialog = document.getElementById("confirmationDialog");
const confirmationSummary = document.getElementById("confirmationSummary");
const newOrderButton = document.getElementById("newOrderButton");
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

function getImagePath(image, size)
{
  return `../../assets/images/image-${image}-${size}.jpg`;
}

function getQuantity(productIndex)
{
  return cart.get(productIndex) || 0;
}

function renderProducts()
{
  productGrid.innerHTML = products.map((product, index) => {
    const quantity = getQuantity(index);
    const controls = quantity === 0
      ? `<button class="product-card__control product-card__add" type="button" data-action="add" data-index="${index}"><img src="../../assets/images/icon-add-to-cart.svg" alt="" width="21" height="20">Add to Cart</button>`
      : `<div class="product-card__control product-card__quantity"><button class="quantity-button" type="button" data-action="decrease" data-index="${index}" aria-label="Decrease ${product.name} quantity">−</button><span aria-label="Quantity: ${quantity}">${quantity}</span><button class="quantity-button" type="button" data-action="increase" data-index="${index}" aria-label="Increase ${product.name} quantity">+</button></div>`;

    return `<article class="product-card${quantity ? " is-selected" : ""}">
      <div class="product-card__image-wrap"><picture><source media="(min-width: 64rem)" srcset="${getImagePath(product.image, "desktop")}"><source media="(min-width: 40rem)" srcset="${getImagePath(product.image, "tablet")}"><img class="product-card__image" src="${getImagePath(product.image, "mobile")}" alt="${product.name}" loading="lazy" decoding="async"></picture>${controls}</div>
      <p class="product-card__category">${product.category}</p><h2 class="product-card__title">${product.name}</h2><p class="product-card__price">${currency.format(product.price)}</p>
    </article>`;
  }).join("");
}

function getCartItems()
{
  return [...cart.entries()].map(([index, quantity]) => ({ ...products[index], index, quantity }));
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
    cartContent.innerHTML = `<div class="cart__empty"><img src="../../assets/images/illustration-empty-cart.svg" alt="" width="128" height="128"><p>Your added items will appear here</p></div>`;
    return;
  }

  const listItems = items.map((item) => `<li class="cart__item"><div><strong>${item.name}</strong><span class="cart__details"><span class="cart__quantity">${item.quantity}x</span>@ ${currency.format(item.price)}<span class="cart__item-total">${currency.format(item.price * item.quantity)}</span></span></div><button class="cart__remove" type="button" data-action="remove" data-index="${item.index}" aria-label="Remove ${item.name}">×</button></li>`).join("");
  cartContent.innerHTML = `<ul class="cart__list">${listItems}</ul><div class="order-total"><span>Order Total</span><strong>${currency.format(getOrderTotal(items))}</strong></div><p class="carbon-note"><img src="../../assets/images/icon-carbon-neutral.svg" alt="" width="21" height="20">This is a <strong>carbon-neutral</strong> delivery</p><button class="primary-button" type="button" data-action="confirm">Confirm Order</button>`;
}

function updateCart(productIndex, change)
{
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
  const listItems = items.map((item) => `<li class="confirmation__item"><img src="${getImagePath(item.image, "thumbnail")}" alt=""><div><strong>${item.name}</strong><span class="cart__details"><span class="cart__quantity">${item.quantity}x</span>@ ${currency.format(item.price)}</span></div><strong>${currency.format(item.price * item.quantity)}</strong></li>`).join("");
  confirmationSummary.innerHTML = `<ul class="confirmation__list">${listItems}</ul><div class="order-total"><span>Order Total</span><strong>${currency.format(getOrderTotal(items))}</strong></div>`;
  confirmationDialog.showModal();
}

function handleAction(event)
{
  const control = event.target.closest("[data-action]");
  if (!control)
  {
    return;
  }
  const productIndex = Number(control.dataset.index);
  const actions = {
    add: () => updateCart(productIndex, 1),
    increase: () => updateCart(productIndex, 1),
    decrease: () => updateCart(productIndex, -1),
    remove: () => updateCart(productIndex, -getQuantity(productIndex)),
    confirm: showConfirmation,
  };
  actions[control.dataset.action]?.();
}

productGrid.addEventListener("click", handleAction);
cartContent.addEventListener("click", handleAction);
newOrderButton.addEventListener("click", () => {
  cart.clear();
  confirmationDialog.close();
  renderProducts();
  renderCart();
});

renderProducts();
renderCart();
