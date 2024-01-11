import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productReducer";
import cartReducer from "./carts/cartReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
  },
  devTools: true,
});
