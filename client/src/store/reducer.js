import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import callReducer from "./reducers/callReducer";

export default combineReducers({
  User: userReducer,
  call: callReducer,
});
