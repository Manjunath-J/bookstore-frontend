import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    addItemToCart: (state, action) => {
      const bookToAdd = action.payload;
      const data = JSON.parse(JSON.stringify(state.cartItems));
      const existingIndex = data.findIndex((val) => {
        return val.name === bookToAdd.name;
      });
      if (existingIndex !== -1) {
        data[0].items[existingIndex].quantity += 1;
      } else {
        data[0].items.push(action.payload);
      }
      console.log(data);
    },
    removeFromCart: (state, action) => {
      const bookToRemove = action.payload;
      const existingIndex = state.cartItems.items.findIndex(
        (val) => val.book_id === bookToRemove.book_id
      );

      if (
        existingIndex !== -1 &&
        state.cartItems.items[existingIndex].quantity > 1
      ) {
        state.cartItems.items[existingIndex].quantity -= 1;
      } else {
        state.cartItems.items.splice(existingIndex, 1);
      }
    },
  },
});

export const { addItemToCart, setCartItems, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
