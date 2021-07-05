import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import rootReducer from "./rootReducer";

// const myMiddleware = (store) => (next) => (action) => {
//   if (action.type === "@products/getDetailsByID") {
//     axios.post(
//       "https://reactmaps-1556023014107-default-rtdb.firebaseio.com/popular.json",
//       { category: action.payload }
//     );
//   }
//   //   const action = {
//   //       type: "@products/getDetailsByID",
//   //       payload: {...}
//   //   }

//   const newAction = {
//     ...action,
//     payload: { ...action.payload, popular: "dasdasdasd" },
//   };

//   return next(newAction);
// };

const store = configureStore({
  reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(myMiddleware),
});

export default store;

// ========================= redux =========================
// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
