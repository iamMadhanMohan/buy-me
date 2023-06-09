// import React from "react";
// import {
//   increaseQuantity,
//   decreaseQuantity,
//   deleteProduct,
// } from "../../Slices/CartSlice";
// import { useDispatch } from "react-redux";

// const CartItem = ({ product, index }) => {
//   const dispatch = useDispatch();
//   const totalPrice = Number(product.totalPrice).toFixed(2);

//   const handleIncrease = () => {
//     dispatch(increaseQuantity(index));
//   };

//   const handleDecrease = () => {
//     dispatch(decreaseQuantity(index));
//   };

//   const handleDeleteButton = () => {
//     dispatch(deleteProduct(index));
//   };

//   return (
//     <div className="cart-item">
//       <tr>
//         <td>
//           <p>{index + 1}</p>
//         </td>
//         <td>
//           <p>{product.title}</p>
//         </td>
//         <td>
//           <p>${product.unitPrice} testing</p>
//         </td>
//         <td>
//           <div className="quantity">
//             <button className="decrease" onClick={handleDecrease}>
//               -
//             </button>
//             <p className="value">{product.quantity}</p>
//             <button className="increase" onClick={handleIncrease}>
//               +
//             </button>
//           </div>
//         </td>
//         <td>
//           <p className="bold">${totalPrice}</p>
//         </td>
//         <td>
//           <p className="delete-button" onClick={handleDeleteButton}>
//             DELETE
//           </p>
//         </td>
//       </tr>
//     </div>
//   );
// };

// export default CartItem;
