import { messageApi } from "../../util/services/index";

export const actionTypes = {
  SET_MESSAGES: "SET_MESSAGES",
  FETCH_MESSAGES: "FETCH_MESSAGE",
  SET_LOADING: "SET_LOADING",
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
};

export default actions;
