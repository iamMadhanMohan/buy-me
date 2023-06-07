import React from "react";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
} from "../../Slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ product, index }) => {
  const dispatch = useDispatch();
  const totalPrice = Number(product.totalPrice).toFixed(2);

  const handleIncrease = () => {
    dispatch(increaseQuantity(index));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(index));
  };

  const handleDeleteButton = () => {
    dispatch(deleteProduct(index));
  };

  return (
    <div className="cart-item">
      <p>{index + 1}</p>
      <p>{product.title}</p>
      <p>${product.unitPrice}</p>
      <div className="quantity">
        <button className="decrease" onClick={handleDecrease}>
          -
        </button>
        <p className="value">{product.quantity}</p>
        <button className="increase" onClick={handleIncrease}>
          +
        </button>
      </div>
      <p className="bold">${totalPrice}</p>
      <p className="delete-button" onClick={handleDeleteButton}>
        DELETE
      </p>
    </div>
  );
};

export default CartItem;
