import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productReducer";
import cartReducer from "./carts/cartReducer";
import pageReducer from "./pages/pageReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    carts: cartReducer,
    pages: pageReducer,
  },
  devTools: true,
});
