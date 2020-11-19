import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Dialogs as BaseDialogs } from "../components/index";
import dialogActions from "../redux/dialog/actions";
import socketActions from '../core/socket';

const Dialogs = ({
  items,
  getDialogs,
  setCurrentDialog,
  currentDialogId,
  myId
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    socketActions.dialogCreatedListener(getDialogs);
  }, []);


  useEffect(() => {
    getDialogs();
  }, [getDialogs]);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const onChangeInput = (value) => {
    if (!value.trim()) {
      setFiltered(items);
      setInputValue(value);
      return;
    }

    const f = items.filter(
      (item) =>
        item.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );

    setFiltered(f);
    setInputValue(value);
  };

  return (
    <BaseDialogs
      items={filtered}
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
    items: state.dialogState.messages,
    currentDialogId: state.dialogState.currentDialogId,
    myId: state.userState.user._id
  };
};

const mapDispatchToProps = {
  getDialogs: dialogActions.fetchDialogs,
  setCurrentDialog: dialogActions.setCurrentDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
