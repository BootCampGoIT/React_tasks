import { createSelector } from "@reduxjs/toolkit";

export const loadingSelector = (state) => state.products.loader;
export const currentProductSelector = (state) => state.products.currentProduct;

// export const laptopsSelector = (state) => state.products.categories["laptops"];
// export const phonesSelector = (state) => state.products.categories["phones"];

export const productsSelector = (state, category) =>
  state.products.categories[category];

export const productFilterSelector = (state) => state.products.filter;

// export const productsSelector = (state, category) =>
//   state.products.categories[category].filter((product) =>
//     product.name.toLowerCase().includes(state.products.filter.toLowerCase())
//   );

export const filteredProducts = createSelector(
  [productsSelector, productFilterSelector],
  (products, filter) =>
    products.filter((product) =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    )
);
