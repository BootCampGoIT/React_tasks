import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import cartReducer from "./cart/cartReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
});

export default rootReducer;
