import { axios } from "../../core/index";

export default {
  getMessagesById: (id) => {
    return axios.get(`/messages?dialog=${id}`).then((response) => response.data);
  },
  createMessage: (text, dialog) => {
    return axios.post('/messages', { text, dialogId: dialog }).then(response => response.data);
  }
};
