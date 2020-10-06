import { dialogApi } from "../../util/services/index";
import { message } from "../../types/interfaces";
import { Dispatch } from "redux";

export enum actionTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_CURRENT_DIALOG = "SET_CURRENT_DIALOG",
}

const actions = {
  setDialogs: (items: message[]) => ({
    type: actionTypes.SET_ITEMS,
    payload: items,
  }),
  setCurrentDialog: (id: string) => ({
    type: actionTypes.SET_CURRENT_DIALOG,
    payload: id,
  }),
  fetchDialogs: () => (dispatch: Dispatch) => {
    dialogApi.getAll().then((data) => {
      dispatch(actions.setDialogs(data));
    });
  },
};

export default actions;
