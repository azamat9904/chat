import { actionTypes } from "./actions";
import { message } from "../../types/interfaces";

export interface dialogState {
  messages: message[];
  currentDialogId: string | null;
}

const initialState: dialogState = {
  messages: [],
  currentDialogId: null,
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
    case actionTypes.SET_CURRENT_DIALOG_ID:
      return {
        ...state,
        currentDialogId: action.payload,
      };
    default:
      return state;
  }
};

export default dialogReducer;
