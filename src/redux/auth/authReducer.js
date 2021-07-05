import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
  resetError,
  setError,
  setLoader,
} from "./authActions";

const authUserReducer = createReducer(null, {
  [registerUser]: (_, action) => action.payload,
  [loginUser]: (_, action) => action.payload,
});

const authLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
});

const authErrorReducer = createReducer("", {
  [setError]: (_, action) => action.payload,
  [resetError]: () => "",
});

const authReducer = combineReducers({
  user: authUserReducer,
  loader: authLoaderReducer,
  error: authErrorReducer,
});

export default authReducer;
