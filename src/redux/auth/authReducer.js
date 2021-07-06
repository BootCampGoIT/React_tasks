import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  loginUser,
  logOut,
  registerUser,
  resetError,
  setError,
  setLoader,
} from "./authActions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

const authUserReducer = createReducer(null, {
  [registerUser]: (_, action) => action.payload,
  [loginUser]: (_, action) => action.payload,
  [logOut]: () => null,
});

const authLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const authErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [resetError]: () => "",
});

const authReducer = combineReducers({
  user: persistReducer(authPersistConfig, authUserReducer),
  loader: authLoaderReducer,
  error: authErrorReducer,
});

export default authReducer;
