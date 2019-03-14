var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.random(1 , 100) * 10;
  price = Math.floor(price);
  if(price === 0)
    price = 1;
  
  var temp = {
    itemName : item,
    itemPrice : price
  };
  
  cart.push(temp);
  console.log(`${item} has been added to your cart`)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var myString = "";
  if(cart.length === 0)
  {
    return "Your shopping cart is empty.";
  }
  
  for(let i = 0; i < cart.length; i++)  // the indexing of this had me for way longer than I care to admit
  {
    if(i === 0){  // universal start
      myString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    } //${cart.length}
    
    else if(i == cart.length - 1)
    {
      myString += `, and ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
    
    else
    {
      myString += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
    }
  }
  
  myString += ".";
  return myString;
}

function total() {
  var total = 0;
  for(let i = 0; i < cart.length; i++)
  {
    total += cart[i].itemPrice;
  }
  return total;
  // write your code here
}

function removeFromCart(item) {
 	var c = item;	// returns the string "Vanilla"
  //var c = cart.indexOf(item.itemName);
  	console.log("(Remove item) " + c);
	
	if(!cart.includes(item))
	//if(!cart.includes(Object{itemName : item}))
	  return "That item is not in your cart."
  console.log(`Cart Length: ${cart.length}`);
  for(let i = 0; i < cart.length; i++)
  {
    if(cart[i].itemName == c)
    {
      cart.splice(i , 1);
      break;
    }
    
  }
  return cart; 
}


function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === null || total() == 0)
    return "Sorry, we don't have a credit card on file for you."
  else{
    var myString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return myString;
  }
}

// taking a break: 10:39 3/13/2019
// back on at 10:54
