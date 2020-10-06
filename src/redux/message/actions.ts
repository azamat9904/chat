import { message } from "../../types/interfaces";
import { Dispatch } from "redux";
import { messageApi } from "../../util/services/index";

export enum actionTypes {
  SET_MESSAGES = "SET_MESSAGES",
  FETCH_MESSAGES = "FETCH_MESSAGE",
  SET_LOADING = "SET_LOADING",
}

const actions = {
  setMessages: (messages: message[]) => ({
    type: actionTypes.SET_MESSAGES,
    payload: messages,
  }),
  setLoading: (isLoading: boolean) => ({
    type: actionTypes.SET_LOADING,
    payload: isLoading,
  }),
  fetchMessages: (id: string) => (dispatch: Dispatch) => {
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
