import { actionTypes } from "./actions";

const initalState = {
  messages: [],
  currentDialogId: null,
  isLoading: false,
};

const messageReducer = (
  state = initalState,
  action
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
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      }
    default:
      return state;
  }
};

export default messageReducer;
