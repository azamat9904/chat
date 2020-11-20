import { axios } from "../../core/index";

export default {
  getAll: () => {
    return axios.get("/dialogs").then((response) => response.data);
  },
  createDialog: (partnerId, text) => {
    return axios.post('/dialogs', { partner: partnerId, text }).then(response => response.data);
  }
};
