import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "../Slices/ApiDataSlice";
import singleProductReducer from "../Slices/SingleProductSlice";
import cartReducer from "../Slices/CartSlice";
import searchReducer from "../Slices/SearchSlice";

export default configureStore({
  reducer: {
    apiData: apiDataReducer,
    product: singleProductReducer,
    cart: cartReducer,
    search: searchReducer,
  },
});
