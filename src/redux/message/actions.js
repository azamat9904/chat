import { messageApi } from "../../util/services/index";

export const actionTypes = {
  SET_MESSAGES: "SET_MESSAGES",
  FETCH_MESSAGES: "FETCH_MESSAGE",
  SET_LOADING: "SET_LOADING",
  ADD_MESSAGE: "ADD_MESSAGE",
  CLEAR_MESSAGES: "CLEAR_MESSAGES"
}

const actions = {
  setMessages: (messages) => ({
    type: actionTypes.SET_MESSAGES,
    payload: messages,
  }),
  setLoading: (isLoading) => ({
    type: actionTypes.SET_LOADING,
    payload: isLoading,
  }),
  addMessage: (message) => ({
    type: actionTypes.ADD_MESSAGE,
    payload: message
  }),
  clearMessages: () => ({
    type: actionTypes.CLEAR_MESSAGES
  }),
  increaseMessage: (message) => (dispatch, getState) => {
    const { dialogState } = getState();
    const { currentDialog } = dialogState;

    if (currentDialog._id === message.dialog._id) {
      dispatch(actions.addMessage(message));
    }
  },
  fetchMessages: (id) => (dispatch) => {
    dispatch(actions.setLoading(true));
    messageApi
      .getMessagesById(id)
      .then((data) => {
        dispatch(actions.setMessages(data));
        dispatch(actions.setLoading(false));
      })
      .catch((error) => {
        dispatch(actions.setLoading(false));
      });
  },
  createMessage: (text) => (dispatch, getState) => {
    const { dialogState } = getState();
    const { currentDialog } = dialogState;
    messageApi.createMessage(text, currentDialog._id).then((d) => {
      console.log(d);
    }).catch((e) => {
      console.log(e);
    })
  }
};

export default actions;
