import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "../Slices/ApiDataSlice";
import categoryReducer from "../Slices/CategoryProductsSlice";
import singleProductReducer from "../Slices/SingleProductSlice";
import cartReducer from "../Slices/CartSlice";

export default configureStore({
  reducer: {
    apiData: apiDataReducer,
    category: categoryReducer,
    product: singleProductReducer,
    cart: cartReducer,
  },
});
