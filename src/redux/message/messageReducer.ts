import { message } from "../../types/interfaces";
import { actionTypes } from "../message/actions";

export interface messageState {
  messages: message[];
  currentDialogId: string | null;
}

const initalState: messageState = {
  messages: [],
  currentDialogId: null,
};

const messageReducer = (
  state = initalState,
  action: { type: actionTypes; payload: any }
) => {
  switch (action.type) {
    case actionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
