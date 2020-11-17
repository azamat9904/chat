import { dialogApi } from "../../util/services/index";

export const actionTypes = {
  SET_ITEMS: "SET_ITEMS",
  SET_CURRENT_DIALOG_ID: "SET_CURRENT_DIALOG_ID",
}

const actions = {
  setDialogs: (items) => ({
    type: actionTypes.SET_ITEMS,
    payload: items,
  }),
  setCurrentDialog: (id) => ({
    type: actionTypes.SET_CURRENT_DIALOG_ID,
    payload: id,
  }),
  fetchDialogs: () => (dispatch) => {
    dialogApi.getAll().then((data) => {
      dispatch(actions.setDialogs(data));
    });
  },
};

export default actions;
