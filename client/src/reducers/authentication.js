import { userConstants } from "../constants/actionsTypes";

const token = localStorage.getItem("access_token");
const initialState = token ? { loggedIn: true } : { loggedIn: false };

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true
      };
    case userConstants.LOGOUT:
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authentication;
