import { ACTION_TYPES } from "../types";

const initialState = {
  inforLogin: {},
};

const AuthenReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        inforLogin: action.inforLogin,
      };
    default:
      return state;
  }
};

export default AuthenReducer;
