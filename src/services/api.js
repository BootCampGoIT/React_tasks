import axios from "axios";


export const createNewAdv = async (category, newAdv) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + `advertisements/${category}.json`,
      newAdv
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getProductByID = async (category, id) => {

  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `advertisements/${category}/${id}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAdv = async (category, id) => {
  try {
    await axios.delete(process.env.REACT_APP_BASE_URL + `advertisements/${category}/${id}.json`);
  } catch (error) {
    console.log(error);
  }
};

export const createNewOrder = async (order) => {
  try {
    await axios.post(process.env.REACT_APP_BASE_URL + "orders.json", order);
  } catch (error) {
    console.log(error);
  }
};

export const getAllAdvByCategory = async (category) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + `advertisements/${category}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
  
};
