import { userConstants as types } from "../constants/actionsTypes";
import * as apis from "../api/api";

export const setUser = user => {
  return {
    type: types.SET_USER,
    user
  };
};

export const fetchUser = () => async dispatch => {
  try {
    const res = await apis.getCurrentUser();
    const user = res.data.user;
    dispatch(setUser(user));
  } catch (error) {
    console.log(console.error());
  }
};

export const login = (username, password) => async dispatch => {
  try {
    const res = await apis.login(username, password);
    const token = res.data.token;
    localStorage.setItem("access_token", token);
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  localStorage.removeItem("access_token");
  return {
    type: types.LOGOUT
  };
};
