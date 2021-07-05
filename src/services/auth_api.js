import axios from "axios";
const API_KEY = "AIzaSyATLDI5y-9PDjVk3Ar5YK476ZnTDxOm0TI";

export const registration = async (user) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      { ...user, returnSecureToken: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
export const login = async (user) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      { ...user, returnSecureToken: true }
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
