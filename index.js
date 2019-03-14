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
  
  /*  // attempt 1: 3/14
  if(!cart.includes(item))
  return  "That item is not in your cart.";
  
  else
  {
    var index = cart.indexOf(item);
    var c = cart.splice(index , 1);
    return cart;
  }
  */  // attempt 1 (3/14)   standard include check, get the index of the item, and splice it out into a local var
  
 /* var c = cart;
  if(!c.includes(item))
  {
    return "That item is not in your cart."
  }
  
  else
  {
    for(let i = 0; i < cart.length; i++)
    {
      console.log(`Going through cart, i = ${i} and is ${item[itemName]}`);
      if(c[i] == item)
      {
        //cart[i]= "Bingo";
        c.splice(i , 1);
        return setCart(c);
      }
      else continue;
    }
  } */
  for(let i = 0; i < cart.length; i++)
  {
    if(i == cart.length - 1)
      return "That item is not in your cart."
    else if(cart[i] != item)
    {
      continue;
    }
    
    else if(cart[i] == item)
    {
      cart.splice(i , 0);
      return cart;
    }
  }
  
}
    
/*      for(let i = 0; i < cart.length - 1; i++)  // changed length to length-1
      {
        //if(cart[i][itemName] == item[item.itemName])
        if(cart[i].itemName == item.itemName)
        {
            //var c = cart.splice(i , 1);
            //cart = c;
            //cart.splice(i , 1);
            //cart.splice(i + 1 , 1);
            //cart.splice(i);
            //cart.splice(i + 1);
            //return cart;
            //return cart.splice(i);
            //return cart.splice(i + 1);
            //return cart.splice(i , 1);
            //return cart.splice(i + 1 , 1);
            
            //var c = cart.splice(i , 1);
            //cart.splice(i , 1);
            //cart.splice(i);
            //cart.splice(i + 1);
            return cart;
        }
      }
  }
  
  else
  {
    return "That item is not in your cart."
  }
  */ // 3/13 code, does not work


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
