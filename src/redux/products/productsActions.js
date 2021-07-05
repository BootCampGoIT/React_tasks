import { createAction } from "@reduxjs/toolkit";

const setLoader = createAction("@products/setLoader");
const setError = createAction("@products/setError");
const resetError = createAction("@products/resetError");
const setPhones = createAction("@products/getPhones");
const setLaptops = createAction("@products/getLaptops");
const getDetailsByProductID = createAction("@products/getDetailsByID");
const setProductFilter = createAction("@products/setProductFilter");

export {
  setError,
  resetError,
  setLoader,
  setPhones,
  setLaptops,
  getDetailsByProductID,
  setProductFilter
};
// ===================== redux =============================
