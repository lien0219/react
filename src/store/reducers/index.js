import { combineReducers } from "redux";
import graphDataReducer from "./graphData";

export default combineReducers({
  graphData: graphDataReducer,
});
