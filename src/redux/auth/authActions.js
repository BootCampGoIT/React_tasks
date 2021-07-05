import { createAction } from "@reduxjs/toolkit";

const registerUser = createAction("auth/register");
const loginUser = createAction("auth/login");
const logOut = createAction("auth/logout");
const setLoader = createAction("auth/setLoader");
const setError = createAction("auth/setError");
const resetError = createAction("auth/resetError");

export { registerUser, loginUser, logOut, setLoader, setError, resetError };
