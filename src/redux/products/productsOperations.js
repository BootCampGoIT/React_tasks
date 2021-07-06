import { getAllAdvByCategory, getProductByID } from "../../services/api";
import {
  getDetailsByProductID,
  setError,
  setLaptops,
  setLoader,
  setPhones,
} from "./productsActions";

export const getProductByIDOperation =
  (category, productID) => async (dispatch) => {
    try {
      const res = await getProductByID(category, productID);
      dispatch(getDetailsByProductID(res));
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

// =============================
const getAction = (category, products, dispatch) => {
  if (category === "phones") {
    dispatch(setPhones(products));
  }
  if (category === "laptops") {
    dispatch(setLaptops(products));
  }
};

export const getAllAdvByCategoryOperation = (category) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await getAllAdvByCategory(category);

    if (response) {
      const products = Object.keys(response).map((key) => ({
        id: key,
        ...response[key],
      }));
      return getAction(category, products, dispatch);
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};
