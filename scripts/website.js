import { checkoutArray } from "../data/cart";
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
  `;
});

document.getElementById('checkout-grid').innerHTML = productsHTML;

document.querySelectorAll('.food-container').forEach((button) => {
  button.addEventListener('click', () => {
    const productID = button.dataset.checkoutArray; 

    let matchingItem;

    checkoutArray.forEach((item) => {
      if (productID === item.productID) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem += 1;
    } else {
      checkoutArray.push({
        id: productID,
        quantity: 1 
      });
    }
    
    let checkoutQuantity = 0;

    checkoutArray.forEach((item) => {
      checkoutQuantity += item.quantity;
    });

    document.getElementById('checkout-grid').innerHTML = checkoutQuantity;
  });
});

