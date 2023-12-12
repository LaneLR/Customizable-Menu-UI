
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


function addToCartbar(button) {
  let cartbarQuantity = 0;
  button.forEach(addButtons, () => {
    addButtons.addEventListener('click', () => {
      cartbarQuantity += 1;
    });
    document.querySelector('.js-item-count').innerHTML = cartbarQuantity;
  })
}

/*
const addToCart = () => {
  let cartQuantity = 0;
  let cartHTML = document.querySelector('.js-item-count').innerHTML;
  let button = document.querySelectorAll('.add-to-cart-button');
  button.forEach(addButton, () => {
    addButton.addEventListener('click', () => {
      cartQuantity += 1;
    });
    cartHTML = cartQuantity;
  })
}
*/

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

const addToCart = () => {
  let cartQuantity = 0;
  let cartHTML = document.querySelector('.js-item-count');

  // Select all elements with class 'add-to-cart-button'
  let buttons = document.querySelectorAll('.add-to-cart-button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cartQuantity += 1;
      cartHTML.innerHTML = cartQuantity; // Update the cart count in the HTML
    });
  });
};

// Call the function to set up the event listeners
addToCart();
