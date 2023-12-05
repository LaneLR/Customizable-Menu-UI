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

document.querySelector('.js-menu-grid').innerHTML = productsHTML;

function addToCheckout(productID) {
  let matchingItem;

  checkoutArray.forEach((checkoutItem) => {
    if (productID === checkoutItem.productID) {
      matchingItem = checkoutItem;
    }
  });

    if (matchingItem) {
    matchingItem.quantity += 1;
    } else {
    checkoutArray.push({
      productID: productID,
      quantity: 1 
    });
  }
}



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

