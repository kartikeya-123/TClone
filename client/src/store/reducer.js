import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import videoReducer from "./reducers/videoReducer";

export default combineReducers({
  User: userReducer,
  Video: videoReducer,
});
