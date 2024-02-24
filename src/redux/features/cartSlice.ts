/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product: any) => product.id === action.payload.id
      );
      //     console.log("state", state);
      //     console.log("action", action);
      // console.log(isExist)
      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const products = state.products.map((product) => {
        // console.log(product)
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
        return product;
      });
      state.products = products.filter((product) => product.quantity > 0);
    },
  },
});
export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
