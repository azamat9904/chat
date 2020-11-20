import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { Dialogs as BaseDialogs } from "../components/index";
import dialogActions from "../redux/dialog/actions";
import userActions from "../redux/user/actions";
import messageActions from '../redux/message/actions';

import socketActions, { socketActionTypes } from '../core/socket';

const Dialogs = ({
  dialogs,
  getDialogs,
  setCurrentDialog,
  currentDialog,
  myId,
  findUsers,
  globalUsers,
  clearGlobalSearch,
  setSelectedUser,
  clearMessages,
  ...props
}) => {

  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);
  const [timerId, setTimerId] = useState('');
  const [queryParamKey, queryParamValue] = props.location.search.substr(1).split('=');

  useEffect(() => {
    getDialogs();
    socketActions.dialogCreatedListener(getDialogs);
    return () => {
      socketActions.removeListener(socketActionTypes.DIALOG_CREATED, getDialogs)
    }
  }, [getDialogs]);


  useEffect(() => {
    if (queryParamKey == 'id' && queryParamValue) {
      const selectedDialog = dialogs.find((dialog) => dialog._id === queryParamValue);
      if (selectedDialog) {
        setCurrentDialog(selectedDialog);
        return;
      }
    }
  }, [dialogs, queryParamKey, queryParamValue])

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


  const onDialogSelect = (dialogId) => {
    setInputValue("");
    setFiltered(dialogs);
    setOtherUsers([]);
    props.history.push('/dialogs?id=' + dialogId);
  }

  const onUserSelect = (userId) => {
    const selectedUser = globalUsers.find((user) => user._id === userId);
    props.history.push('/dialogs');
    setSelectedUser(selectedUser);
    clearMessages();
    setInputValue("");
    setFiltered(dialogs);
    setOtherUsers([]);
  }

  const onChangeInput = (value) => {
    if (!value) {
      clearGlobalSearch();
      setFiltered(dialogs);
      setInputValue("");
      clearTimeout(timerId);
      return;
    }

    const f = dialogs.filter(
      (dialog) =>
        dialog.buddy.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
        || dialog.buddy.email.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );

    setFiltered(f);
    setInputValue(value);

    clearTimeout(timerId);

    const timer = setTimeout(() => {
      findUsers(value);
    }, 250);

    setTimerId(timer);
  };


  return (
    <BaseDialogs
      dialogs={filtered}
      globalUsers={otherUsers}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onDialogSelect={onDialogSelect}
      onUserSelect={onUserSelect}
      currentDialogId={currentDialog ? currentDialog._id : ""}
      myId={myId}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogState.messages,
    currentDialog: state.dialogState.currentDialog,
    myId: state.userState.user._id,
    globalUsers: state.userState.searchedUsers,
  };
};

const mapDispatchToProps = {
  getDialogs: dialogActions.fetchDialogs,
  setCurrentDialog: dialogActions.setCurrentDialog,
  findUsers: userActions.findUsers,
  clearGlobalSearch: userActions.searchUserClear,
  setSelectedUser: dialogActions.setSelectedUser,
  clearMessages: messageActions.clearMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dialogs));
