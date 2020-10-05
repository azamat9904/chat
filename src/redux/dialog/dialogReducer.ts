import { actionTypes } from "./actions";
import { message } from "../../types/interfaces";

export interface dialogState {
  messages: message[];
}

const initialState: dialogState = {
  messages: [],
};

const dialogReducer = (
  state = initialState,
  action: { type: actionTypes; payload: any }
) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default dialogReducer;
