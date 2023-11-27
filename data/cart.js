export const checkoutArray = []

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

document.querySelectorAll('.food-container').addEventListener('click', () => {
  appendCheckoutArray();
});

function appendCheckoutArray() {
  const clickedElem = document.querySelector('.food-container').id;
  document.getElementById(clickedElem).innerHTML = html;
  checkoutArray.push(html);

  renderCheckout();
};