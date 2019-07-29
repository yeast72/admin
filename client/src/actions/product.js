import * as api from "../api/api";
import { productConstants as types } from "../constants/actionsTypes";

export const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
});

export const requestProducts = () => ({
  type: types.REQUEST_PRODUCTS
});

export const fetchProducts = () => async dispatch => {
  dispatch(requestProducts());
  try {
    const res = await api.getAllProducts();
    const products = res.data.products;
    dispatch(receiveProducts(products));
  } catch (error) {
    console.log("error ", error);
  }
};

export const addProduct = product => ({
  type: types.ADD_PRODUCT,
  product
});

export const updateProduct = (productId, product) => ({
  type: types.UPDATE_PRODUCT,
  productId,
  product
});

export const deleteProduct = productId => ({
  type: types.DELETE_PRODUCT,
  productId
});
