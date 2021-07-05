import { createSelector } from "@reduxjs/toolkit";

export const cartFilterSelector = (state) => state.cart.filter; //sa

export const cartSelector = (state) => state.cart.items;//[{}, {}]

// export const cartSelector = (state) => {
//   return state.cart.items.filter((item) =>
//     item.name.toLowerCase().includes(state.cart.filter.toLowerCase())
//   );
// };

export const getFilteredCart = createSelector(
  [cartSelector, cartFilterSelector],
  (cartItems, filter) =>
  cartItems.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
);

// const getResult = (list, "Alex") => list.filter(item=> item.name === "Alex")
