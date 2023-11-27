const checkoutArray = [{
  name: '#1 The Burganator',
  html:
  `<div class="food-container">
    <div class="food-image">
      <!--Change the img src to change picture of item on the menu-->
      <img src="images/food-images/burger1.png">
    </div>
    <div class="price">
      <p>$5.98</p>
    </div>
    <div class="food-desc text-center">
      <div class="food-title">
        <p>#1 The Burganator</p>
      </div>
      <div class="food-description">
        <p>Our classic burger, drenched in a secret sauce.</p>
      </div>
    </div>
  </div>
  <div class="delete-button">Delete Item</div>`
}]

renderCheckout();

function renderCheckout() {
  let menuListHTML = '';

  checkoutArray.forEach((menuObject) => {
    const { html } = menuObject;
    const menuHTML = html;
    menuListHTML += menuHTML;
  })

  document.querySelector('.added-checkout-item').innerHTML = menuListHTML;
  document.querySelectorAll('.delete-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      toDoArray.splice(index, 1);
      renderList();
    });
  });
};

document.querySelector('.food-container').addEventListener('click', () => {
  appendCheckoutArray();
});

function appendCheckoutArray() {
  const addableElem = document.querySelectorAll('.food.container');

  
  document.getElementById('').innerHTML = html;
  checkoutArray.push(html);

  renderCheckout();
};