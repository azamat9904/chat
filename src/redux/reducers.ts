import { combineReducers } from "redux";
import dialogReducer from "./dialog/dialogReducer";
import messageReducer from "./message/messageReducer";

const reducers = combineReducers({
  dialogState: dialogReducer,
  messageState: messageReducer,
});

export default reducers;
