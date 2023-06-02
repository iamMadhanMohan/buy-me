import { createSlice } from "@reduxjs/toolkit";

const initialState = { category: "" };

const CategoryProductsSlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.category = action.payload;
      return state;
    },
  },
});

export const { addCategory } = CategoryProductsSlice.actions;

export default CategoryProductsSlice.reducer;
