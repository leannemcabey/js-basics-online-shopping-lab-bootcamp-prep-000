var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({'itemName': item, 'itemPrice': Math.floor(Math.random() * 100) + 1})
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length == 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length == 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    } else {
    var itemList = []
    for (var i = 0; i < cart.length - 1; i++) {
      itemList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    itemList.push(` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}`)
    return `In your cart, you have${itemList.toString()}.`
  }
}

function total() {
  var totalCost = 0
  for (var i = 0; i < cart.length; i++) {
    totalCost = totalCost + cart[i].itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (typeof cardNumber == 'undefined') {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cost = total()
    cart = []
    return `Your total cost is ${cost}, which will be charged to the card ${cardNumber}.`
  }
}
