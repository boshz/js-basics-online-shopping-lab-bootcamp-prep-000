var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var io = {};
  for (var i = 0; i < item.length; i++) {
    io[i] = item[i];
  }
 cart.push(item);
 var booker = item['value']
 return booker
}

function viewCart() {
  // write your code here
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
