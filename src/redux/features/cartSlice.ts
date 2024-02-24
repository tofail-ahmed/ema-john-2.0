/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";
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
        (product) => product.id === action.payload.id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSelectedItems(state);
      state.grandTotal = selectGrandTotal(state);
      state.tax = selectTax(state);
      state.totalPrice = selectTotalPrice(state);
    },
    updateQuantity: (state, action) => {
      const products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
          state.selectedItems = selectSelectedItems(state);
          state.grandTotal = selectGrandTotal(state);
          state.tax = selectTax(state);
          state.totalPrice = selectTotalPrice(state);
        }
        return product;
      });
      state.products = products.filter((product) => product.quantity > 0);
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.selectedItems = selectSelectedItems(state);
      state.grandTotal = selectGrandTotal(state);
      state.tax = selectTax(state);
      state.totalPrice = selectTotalPrice(state);
    },
  },
});

export const selectSelectedItems = (state) => {
  return state.products.reduce((total, product) => {
    return Number(total + product.quantity);
  }, 0);
};

export const selectTotalPrice = (state) => {
  return state.products.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
};

export const selectTax = (state) => {
  return selectTotalPrice(state) * state.taxRate;
};

export const selectGrandTotal = (state) => {
  return selectTotalPrice(state) + selectTax(state);
};

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

