import { combineReducers } from "redux";
import { productConstants as types } from "../constants/actionsTypes";

const products = (state, action) => {
  switch (action.type) {
    case types.UPDATE_PRODUCT:
      return { ...action.product };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {})
      };
    case types.ADD_PRODUCT:
      return { ...state, [action.product.id]: action.product };
    case types.DELETE_PRODUCT:
      delete state[action.productId];
      return {
        ...state
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        };
      }
      return state;
  }
};

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_PRODUCTS:
      return action.products.map(product => product.id);
    case types.DELETE_PRODUCT:
      return state.filter(id => id.toString() !== action.productId.toString());
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds
});

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id));
