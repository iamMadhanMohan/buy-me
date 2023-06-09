import "./Cart.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../../Slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cart);

  const [buy, setBuy] = useState(false);

  const totalItems = cartData.length;

  let finalPrice = 0;

  cartData.map((item) => (finalPrice += Number(item.totalPrice)));

  const handelCheckOut = () => {
    setBuy(!buy);
  };

  const handleIncrease = (index) => {
    dispatch(increaseQuantity(index));
  };

  const handleDecrease = (index) => {
    dispatch(decreaseQuantity(index));
  };

  const handleDeleteButton = (index) => {
    dispatch(deleteProduct(index));
  };

  return (
    <div className="cart-component">
      <table className="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>${product.unitPrice}</td>
              <td>
                <div className="quantity">
                  <button
                    className="decrease"
                    onClick={() => handleDecrease(index)}
                  >
                    -
                  </button>
                  <p className="value">{product.quantity}</p>
                  <button
                    className="increase"
                    onClick={() => handleIncrease(index)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="bold">${Number(product.totalPrice).toFixed(2)}</td>
              <td>
                <p
                  className="delete-button"
                  onClick={() => handleDeleteButton(index)}
                >
                  DELETE
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
