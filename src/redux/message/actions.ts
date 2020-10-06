import { message } from "../../types/interfaces";
import { Dispatch } from "redux";
import { messageApi } from "../../util/services/index";

export enum actionTypes {
  SET_MESSAGES = "SET_MESSAGES",
  FETCH_MESSAGES = "FETCH_MESSAGE",
  
}

const actions = {
  setMessages: (messages: message[]) => ({
    type: actionTypes.SET_MESSAGES,
    payload: messages,
  }),
  fetchMessages: (id: string) => (dispatch: Dispatch) => {
    messageApi
      .getMessagesById(id)
      .then((data) => dispatch(actions.setMessages(data)));
  },
};
