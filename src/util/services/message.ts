import { axios } from "../../core/index";

export default {
  getMessagesById: (id: string) => {
    return axios.get(`/messages/${id}`).then((response) => response.data);
  },
};
