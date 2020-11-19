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
  fetchDialogs: () => (dispatch, getState) => {
    dialogApi.getAll().then((dialogs) => {
      const { userState } = getState();
      const { user } = userState;
      dialogs.forEach((dialog) => {
        if (user._id === dialog.author._id) {
          dialog.buddy = dialog.partner;
          return;
        }
        dialog.buddy = dialog.author;
      })
      dispatch(actions.setDialogs(dialogs));
    });
  },
};

export default actions;
