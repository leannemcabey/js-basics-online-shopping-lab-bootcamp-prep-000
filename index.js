var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({'itemName': item, 'itemPrice': Math.floor(Math.random() * 11)})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return 'Your shopping cart is empty'
  }
  else (
    var intro = 'In your cart, you have '
    var itemList = []
    for (var i = 0; i < cart.length; i++) {
    itemList.push(`${cart[i][itemName]} at $${cart[i][itemPrice]}`)
    )
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
