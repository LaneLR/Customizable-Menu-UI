export const checkoutArray = []

export function addToCheckout(productID) {
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