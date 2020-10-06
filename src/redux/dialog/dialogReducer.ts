import { actionTypes } from "./actions";
import { message } from "../../types/interfaces";

export interface dialogState {
  messages: message[];
  currentDialog: message[] | null;
}

const initialState: dialogState = {
  messages: [],
  currentDialog: null,
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
    case actionTypes.SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.payload,
      };
    default:
      return state;
  }
};

export default dialogReducer;
