import { dialogApi } from "../../util/services/index";

export const actionTypes = {
  SET_ITEMS: "SET_ITEMS",
  SET_CURRENT_DIALOG: "SET_CURRENT_DIALOG",
  SET_SELECTED_USER: "SET_SELECTED_USER",
  CREATE_DIALOG: "CREATE_DIALOG",
  CREATE_DIALOG_SUCCESS: "CREATE_DIALOG_SUCCESS",
  CREATE_DIALOG_FAILED: "CREATE_DIALOG_FAILED",
  CREATE_DIALOG_CLEAR: "CREATE_DIALOG_CLEAR"
}

const actions = {
  setDialogs: (items) => ({
    type: actionTypes.SET_ITEMS,
    payload: items,
  }),
  setCurrentDialog: (dialog) => ({
    type: actionTypes.SET_CURRENT_DIALOG,
    payload: dialog,
  }),
  setSelectedUser: (user) => ({
    type: actionTypes.SET_SELECTED_USER,
    payload: user
  }),
  updateDialog: (message, currentDialog) => (dispatch, getState) => {
    const { dialogState } = getState();
    const dialogs = [...dialogState.messages];
    const index = dialogs.indexOf(currentDialog);
    if (index !== -1)
      dialogs[index].lastMessage = message;

    dispatch(actions.setDialogs(dialogs));
  },
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
  createDialogFailed: (error) => ({
    type: actionTypes.CREATE_DIALOG_FAILED,
    payload: error
  }),
  createDialogSuccess: (dialogId) => ({
    type: actionTypes.CREATE_DIALOG_SUCCESS,
    payload: dialogId
  }),
  createDialogClear: () => ({
    type: actionTypes.CREATE_DIALOG_CLEAR
  }),
  createDialog: (text) => (dispatch, getState) => {
    const { dialogState } = getState();
    const { selectedUser } = dialogState;
    dialogApi.createDialog(selectedUser._id, text).then((dialog) => {
      dispatch(actions.createDialogSuccess(dialog._id));
    }).catch((e) => {
      dispatch(actions.createDialogFailed(e.response));
    })
  }
};

export default actions;
