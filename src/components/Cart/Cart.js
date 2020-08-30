import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, prd)=> total + prd.price, 0);
  let shipping = 0;
  if (total > 35){
    shipping = 0
  }
  else if (total> 15){
    shipping = 4.99
  }
  else if(total>0){
    shipping = 12.99
  }
  const tax = total / 10;
  const formatNumber = num => {
    const precision = num.toFixed(2)
    return Number (precision);
  }
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <h4>Order Summery</h4>
      <p>Items Orders: {cart.length} </p>
      <p><small>Shipping: {shipping} </small></p>
      <p>
      <small>Tax: {formatNumber(tax)} </small></p>
      <p> Total Price: {formatNumber(grandTotal)} </p>
    </div>
  );
};

export default Cart;