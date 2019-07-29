import { combineReducers } from "redux";
import products from "./products";
import user from "./user";
import auth from "./authentication";

export default combineReducers({ products, user, auth });
