import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Dialogs as BaseDialogs } from "../components/index";
import dialogActions from "../redux/dialog/actions";
import userActions from "../redux/user/actions";

import socketActions, { socketActionTypes } from '../core/socket';

const Dialogs = ({
  dialogs,
  getDialogs,
  setCurrentDialog,
  currentDialogId,
  myId,
  findUsers,
  globalUsers
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);

  useEffect(() => {
    getDialogs();
    socketActions.dialogCreatedListener(getDialogs);
    return () => {
      socketActions.removeListener(socketActionTypes.DIALOG_CREATED, getDialogs)
    }
  }, [getDialogs]);


  useEffect(() => {
    const users = [];
    for (let user of globalUsers) {
      let isExist = false;
      for (let myFriend of filtered) {
        if (user._id === myFriend.buddy._id) {
          isExist = true;
        }
      }
      if (!isExist)
        users.push(user);
      isExist = false;
    }
    setOtherUsers(users);
  }, [globalUsers])



  useEffect(() => {
    setFiltered(dialogs);
  }, [dialogs]);


  const onChangeInput = (value) => {
    if (!value.trim()) {
      setFiltered(dialogs);
      setInputValue(value);
      return;
    }
    const f = dialogs.filter(
      (dialog) =>
        dialog.buddy.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );
    findUsers(value);
    setFiltered(f);
    setInputValue(value);
  };

  return (
    <BaseDialogs
      dialogs={filtered}
      globalUsers={otherUsers}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialog}
      currentDialogId={currentDialogId}
      myId={myId}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogState.messages,
    currentDialogId: state.dialogState.currentDialogId,
    myId: state.userState.user._id,
    globalUsers: state.userState.searchedUsers
  };
};

const mapDispatchToProps = {
  getDialogs: dialogActions.fetchDialogs,
  setCurrentDialog: dialogActions.setCurrentDialog,
  findUsers: userActions.findUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
