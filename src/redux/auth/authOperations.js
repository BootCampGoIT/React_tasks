import { login, registration } from "../../services/auth_api";
import { loginUser, registerUser, setError } from "./authActions";

export const registerOperation = (user) => async (dispatch) => {
  try {
    const response = await registration(user);
    dispatch(registerUser(response));
  } catch (error) {
    dispatch(setError(error));
  }
};
export const loginOperation = (user) => async (dispatch) => {
  try {
    const response = await login(user);
    dispatch(loginUser(response));
  } catch (error) {
    dispatch(setError(error));
  }
};
