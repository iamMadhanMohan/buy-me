import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state = state.cart.splice(action.payload, 1);
    },

    increaseQuantity: (state, action) => {
      state.cart[action.payload].quantity += 1;
      state.cart[action.payload].totalPrice =
        Number(state.cart[action.payload].totalPrice) +
        Number(state.cart[action.payload].unitPrice);
    },

    decreaseQuantity: (state, action) => {
      if (state.cart[action.payload].quantity > 1) {
        state.cart[action.payload].quantity -= 1;
        state.cart[action.payload].totalPrice =
          Number(state.cart[action.payload].totalPrice) -
          Number(state.cart[action.payload].unitPrice);
      }
    },
  },
});

export const { addProduct, deleteProduct, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
