import { axios } from "../../core/index";

export default {
  getAll: () => {
    return axios.get("/dialogs").then((response) => response.data);
  }
};
