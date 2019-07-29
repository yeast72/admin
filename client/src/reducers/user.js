import { userConstants as types } from "../constants/actionsTypes";

const initialState = { id: "", username: "", role: "" };

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        id: action.user.id,
        username: action.user.username,
        role: action.user.role
      };
    default:
      return state;
  }
};

export default user;
