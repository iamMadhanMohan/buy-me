import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "../Slices/ApiDataSlice";
import categoryReducer from "../Slices/CategoryProductsSlice";

export default configureStore({
  reducer: {
    apiData: apiDataReducer,
    category: categoryReducer,
  },
});