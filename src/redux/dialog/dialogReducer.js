import { actionTypes } from "./actions";

const initialState = {
  messages: [],
  currentDialogId: null,
};

const dialogReducer = (
  state = initialState,
  action
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
