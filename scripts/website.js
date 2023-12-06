import { checkoutArray, addToCheckout } from "../data/cart";
import { products } from "../data/products";

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div id="menu-container" class="col-lg-12 text-center">
    <div class="food-container">
      <div class="food-image">
        <img src="${product.image}">
      </div>
      <div class="price">
        <p>$${product.priceInCents / 100}</p>
      </div>
      <div class="food-desc text-center">
        <div class="food-title">
          <p>${product.name}</p>
          <button class="add-to-cart-button">Add Item</button>
        </div>
        <div class="food-description">
          <p>${product.description}</p>
        </div>
      </div>
    </div>
  </div>
  `
});

document.querySelector('.menu-grid').innerHTML = productsHTML;

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    let checkoutQuantity = 0;
    checkoutArray.forEach((checkoutItem) => {
      checkoutQuantity += checkoutItem.quantity;
    });
    document.querySelector('.js-item-count').innerHTML = checkoutQuantity;
  })
})

function updateCheckoutQuantity() {
  let checkoutQuantity = 0;

  checkoutArray.forEach((checkoutItem) => {
    checkoutQuantity += checkoutItem.quantity;
  });
  document.querySelector('.js-item-count').innerHTML = checkoutQuantity;
}

document.querySelectorAll('.add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => { 
    const productID = button.dataset.productID;
    addToCheckout(productID);
  });
});

