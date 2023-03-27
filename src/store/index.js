import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./products/slice"

export default configureStore({
  reducer: {
    cart: cartReducer,
  }
})