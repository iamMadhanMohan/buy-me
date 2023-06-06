import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const SingleProductSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addDetails } = SingleProductSlice.actions;
export default SingleProductSlice.reducer;
