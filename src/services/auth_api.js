import axios from "axios";

export const registration = async (user) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`,
      { ...user, returnSecureToken: true }
    );
    return response.data;
  } catch (error) {
    const newError = error.response.data.error.message;
    throw newError;
  }
};




export const login = async (user) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
      { ...user, returnSecureToken: true }
    );
    return response.data;
  } catch (error) {
    const newError = error.response.data.error.message;
    throw newError;
  }
};
