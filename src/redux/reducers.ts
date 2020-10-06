import { combineReducers } from "redux";
import dialogReducer from "./dialog/dialogReducer";
import messageReducer from "./message/messageReducer";

const reducers = combineReducers({
  dialog: dialogReducer,
  message: messageReducer,
});

export default reducers;
