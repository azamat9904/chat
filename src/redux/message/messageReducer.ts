import { message } from "../../types/interfaces";
import { actionTypes } from "../message/actions";

export interface messageState {
  messages: message[];
  currentDialogId: string | null;
  isLoading: boolean;
}

const initalState: messageState = {
  messages: [],
  currentDialogId: null,
  isLoading: false,
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
    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default messageReducer;
