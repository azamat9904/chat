import { combineReducers } from "redux";
import dialogReducer from "./dialog/dialogReducer";

const reducers = combineReducers({
  dialog: dialogReducer,
});

export default reducers;
