function addToCart() {
  let cartQuantity = parseInt(localStorage.getItem('cartQuantity')) || 0;
  let cartHTML = document.querySelector('.js-item-count');
  let button = document.querySelectorAll('.add-to-cart-button');
  button.forEach((addButton) => {
    addButton.addEventListener('click', () => {
      cartQuantity += 1;
      cartHTML.innerHTML = cartQuantity;
      localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity))
    });
  });
  cartHTML.innerHTML = cartQuantity;
}

addToCart();

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

document.getElementById('menu-grid').innerHTML = productsHTML;

const checkoutArray = [];

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

