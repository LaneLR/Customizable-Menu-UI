function addAndRemoveFromCart() {
  let originalElement = document.getElementById('dess-one');
  let cartQuantity = parseInt(localStorage.getItem('cartQuantity')) || 0;
  const cartHTML = document.querySelector('.js-item-count');
  const addToCartButton = document.querySelectorAll('.add-to-cart-button');
  const emptyCartButton = document.querySelector('.empty-cart-button');
  const destination = document.getElementById('checkout-grid');

  addToCartButton.forEach((addButton) => {
    addButton.addEventListener('click', () => {
      if (addButton) {
        cartQuantity += 1;
        cartHTML.innerHTML = cartQuantity;
        localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));
        } else {
          alert('did not work');
      }
    });
  });
  emptyCartButton.addEventListener('click', () => {
    cartQuantity = 0;
    cartHTML.innerHTML = cartQuantity;
    localStorage.removeItem('cartQuantity');
  });
  cartHTML.innerHTML = cartQuantity;
}

addAndRemoveFromCart();

const checkoutArray = [];

function addToCheckout(productID) {
  let matchingItem;

  checkoutArray.forEach((checkoutItem) => {
    if (productID === checkoutItem.productID) {
      matchingItem = checkoutItem;
    }
  });
  
  if (matchingItem) {
    matchingItem += 1;
  } else {
    checkoutArray.push({
      id: productID, 
    });
  }
}

const products = [
  {
  id: "burg-#1",
  image: "images/food-images/burger1.png",
  name: "#1 The Burganator",
  description: "Our classic burger, drenched in a secret sauce.",
  priceInCents: 598
},
{
  id: "burg-#2",
  image: "images/food-images/burger2.png",
  name: "#2 Burgadouble-anator",
  description: "A double-sized Burganator.",
  priceInCents: 798
},
{
  id: "burg-#3",
  image: "images/food-images/burger3.png",
  name: "#3 The Boujee Burger",
  description: "A large hefty rich tasting burger.",
  priceInCents: 1098
},
{
  id: "burg-#4",
  image: "images/food-images/burger4.png",
  name: "#4 The B.O.B.",
  description: "The Big Ol' Burger (B.O.B.) is a hefty burger dripping with delicious sauce.",
  priceInCents: 899
},
{
  id: "burg-#5",
  image: "images/food-images/burger5.png",
  name: "#5 Top Heavy",
  description: "Not for the faint of heart, this burger boasts over 1000 calories. For most people, it's breakfast and lunch.",
  priceInCents: 1297
},
{
  id: "burg-#6",
  image: "images/food-images/burger6.png",
  name: "#6 Featherweight",
  description: "A slider for those looking for a quick bite.",
  priceInCents: 478
},
{
  id: "burg-#7",
  image: "images/food-images/burger7.png",
  name: "#7 Joey's Pick",
  description: "Our head chef's favorite.",
  priceInCents: 997
},
{
  id: "burg-#8",
  image: "images/food-images/burger8.png",
  name: "#8 Veggie Lover's",
  description: "A veggie burger that can come with a patty for those wanting a little more oomph with their food.",
  priceInCents: 798
},
{
  id: "burg-#9",
  image: "images/food-images/burger9.png",
  name: "#9 Kid's Smile Meal",
  description: "Our signature kid's meal, comes with apple slices and milk.",
  priceInCents: 599
},
{
  id: "drink-#1",
  image: "images/food-images/root-beer.png",
  name: "Soda",
  description: "Your choice of Coke, Pepsi, A&W Root Beer and Fanta.",
  priceInCents: 179
},
{
  id: "drink-#2",
  image: "images/food-images/lemonade.png",
  name: "Lemonade",
  description: "Freshly squeezed lemonade.",
  priceInCents: 179
},
{
  id: "drink-#3",
  image: "images/food-images/orange-drink.png",
  name: "Orange Juice",
  description: "Freshly squeezed orange juice.",
  priceInCents: 179
},
{
  id: "drink-#4",
  image: "images/food-images/water.png",
  name: "Water",
  description: "Premium Dasani bottled water.",
  priceInCents: 298
},
{
  id: "drink-#5",
  image: "images/food-images/flurry.png",
  name: "Ice Cream Flurry",
  description: "A flurry of ice cream. Comes in chocolate, vanilla and strawberry flavors.",
  priceInCents: 498
},
{
  id: "dess-#1",
  image: "images/food-images/pie.png",
  name: "Slice of Pie",
  description: "A slice of apple, pecan or peanut butter pie.",
  priceInCents: 597
},
{
  id: "dess-#2",
  image: "images/food-images/cake.png",
  name: "Cake",
  description: "A full-sized cake flavored either chocolate or vanilla. Discounted on birthdays.",
  priceInCents: 998
},
{
  id: "dess-#3",
  image: "images/food-images/cookie.png",
  name: "Large Cookie",
  description: "A big chocolate chip cookie, made fresh every morning.",
  priceInCents: 250
}
]