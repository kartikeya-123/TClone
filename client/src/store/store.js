import { createStore } from "redux";
import mainReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const store = createStore(mainReducer, composeWithDevTools());

export default store;
