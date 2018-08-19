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
    return 'Your shopping cart is empty.'
  } else if (cart.length == 1) {
      return `In your cart, you have ${cart.itemName} at $${cart.itemPrice}.`
    } else {
    var itemList = []
    for (var i = 0; i < cart.length - 1; i++) {
      itemList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    itemList.push(` and ${cart[cart.length - 1].itemName} at ${cart[cart.length - 1].itemPrice}.`)
    return `In your cart, you have${itemList.toString()}.`
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
