import { combineReducers } from "redux";
import dialogReducer from "./dialog/dialogReducer";
import messageReducer from "./message/messageReducer";
import userReducer from './user/userReducer';

const reducers = combineReducers({
  dialogState: dialogReducer,
  messageState: messageReducer,
  userState: userReducer
});

export default reducers;
