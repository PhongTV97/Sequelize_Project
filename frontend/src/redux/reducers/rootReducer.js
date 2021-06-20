import { combineReducers } from "redux";
import AuthenReducer from "./authen";

const appReducer = combineReducers({
  AuthenReducer,
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
