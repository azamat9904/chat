import { actionTypes } from "./actions";

const initialState = {
  messages: [],
  currentDialog: null,
  selectedUser: null,
  createDialogError: null,
  createDialogSuccess: null
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
    case actionTypes.SET_CURRENT_DIALOG:
      return {
        ...state,
        currentDialog: action.payload,
        selectedUser: null
      };
    case actionTypes.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
        currentDialog: null
      };
    case actionTypes.CREATE_DIALOG_SUCCESS:
      return {
        ...state,
        createDialogSuccess: true
      };
    case actionTypes.CREATE_DIALOG_FAILED:
      return {
        ...state,
        createDialogError: action.payload
      };
    case actionTypes.CREATE_DIALOG_CLEAR:
      return {
        ...state,
        createDialogError: null,
        createDialogSuccess: null
      }
    default:
      return state;
  }
};

export default dialogReducer;
