import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../cart/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
