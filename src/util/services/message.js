import { axios } from "../../core/index";

export default {
  getMessagesById: (id) => {
    return axios.get(`/messages?_id=${id}`).then((response) => response.data);
  },
};
