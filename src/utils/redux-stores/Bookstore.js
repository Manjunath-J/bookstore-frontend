import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import bookSlice from "./BookSlice";
import wishSlice from "./WishSlice";
import orderSlice from './OrderSlice';
import addressSlice from './AddressSlice';

const appStore = configureStore({
  reducer: {
    cart: cartSlice,
    book: bookSlice,
    wish: wishSlice,
    order: orderSlice,
    address:addressSlice
  },
});

export default appStore;