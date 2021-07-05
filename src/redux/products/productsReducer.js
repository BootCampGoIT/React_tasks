import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getDetailsByProductID,
  resetError,
  setError,
  setLaptops,
  setLoader,
  setPhones,
  setProductFilter
} from "./productsActions";

const productItemsReducer = createReducer(
  { phones: [], laptops: [] },
  {
    [setPhones]: (state, action) => ({
      ...state,
      phones: [...action.payload],
    }),
    [setLaptops]: (state, action) => ({
      ...state,
      laptops: [...action.payload],
    }),
  }
);
const productsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const productsErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [resetError]: () => "",
});

const currentProductReducer = createReducer(
  {},
  {
    [getDetailsByProductID]: (_, action) => ({
      ...action.payload,
    }),
  }
);
const productsFilterReducer = createReducer("", {
  [setProductFilter]: (_, action) => action.payload,
});

const productsReducer = combineReducers({
  categories: productItemsReducer,
  loader: productsLoaderReducer,
  error: productsErrorReducer,
  currentProduct: currentProductReducer,
  filter: productsFilterReducer
});

export default productsReducer;

// =========================== redux ==============================

// import { combineReducers } from "redux";
// import {
//   RESETERROR,
//   SETERROR,
//   SETLAPTOPS,
//   SETLOADER,
//   SETPHONES,
// } from "./productsActions";

// const productItemsReducer = (state = { phones: [], laptops: [] }, action) => {
//   switch (action.type) {
//     case SETLAPTOPS:
//       return {
//         ...state,
//         laptops: [...action.payload],
//       };
//     case SETPHONES:
//       return {
//         ...state,
//         phones: [...action.payload],
//       };

//     default:
//       return state;
//   }
// };
// const productsLoaderReducer = (state = false, action) => {
//   switch (action.type) {
//     case SETLOADER:
//       return !state;
//     default:
//       return state;
//   }
// };
// const productsErrorReducer = (state = "", action) => {
//   switch (action.type) {
//     case SETERROR:
//       return action.payload;
//     case RESETERROR:
//       return "";
//     default:
//       return state;
//   }
// };

// const productsReducer = combineReducers({
//   items: productItemsReducer,
//   loader: productsLoaderReducer,
//   error: productsErrorReducer,
// });

// export default productsReducer;
