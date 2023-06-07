import React, { useState } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.cart);

  const [buy, setBuy] = useState(false);

  const totalItems = cartData.length;
  let finalPrice = 0;
  cartData.map((item) => (finalPrice += Number(item.totalPrice)));

  const cartItemsComponent = cartData.map((item, index) => (
    <CartItem key={index} product={item} index={index} />
  ));

  const handelCheckOut = () => {
    setBuy(!buy);
  };

  return (
    <div className="cart-component">
      <div className="table-head">
        <p>S.No</p>
        <p>Product Name</p>
        <p>Unit Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
        <p>Action</p>
      </div>

      {cartItemsComponent}

      <div className="check-out-div">
        <div>
          <div className="flex">
            <p>Total No.Of Items:</p>
            <p className="bold margin-left">{totalItems}</p>
          </div>
          <div className="flex">
            <p>Total Price:</p>
            <p className="bold margin-left">${finalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button className="check-out-button" onClick={handelCheckOut}>
          Check Out
        </button>
      </div>

      <div className={buy ? "payment-div" : "display-none"}>
        <div>
          <h1>Congrats, Succesfully Buyed!</h1>
          <button onClick={handelCheckOut}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
