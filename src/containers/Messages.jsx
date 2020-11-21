import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { Messages as BaseMessages } from "../components/messages/Messages";
import messageActions from "../redux/message/actions";
import dialogActions from '../redux/dialog/actions';

import socketActions, { socketActionTypes } from '../core/socket';


const Messages = ({
  messages,
  fetchMessages,
  currentdialog,
  isLoading,
  increaseMessage,
  myId,
  updateDialog
}) => {

  const blockRef = useRef(null);

  useEffect(() => {
    if (currentdialog && currentdialog._id)
      fetchMessages(currentdialog._id);

    const createMessageHandler = (message) => {
      updateDialog(message);
      increaseMessage(message);
    }

    socketActions.messageCreatedListener(createMessageHandler);
    return () => {
      socketActions.removeListener(socketActionTypes.NEW_MESSAGE, createMessageHandler);
    }
  }, [currentdialog, fetchMessages]);


  useEffect(() => {

    const scrollToDown = (element) => {
      window.requestAnimationFrame(() => {
        const scrollHeight = element.current.scrollHeight;
        element.current.scrollTo(0, scrollHeight);
      });
    };

    scrollToDown(blockRef);
  }, [messages]);



  return (
    <div className="chat__dialog-messages" ref={blockRef}>
      <BaseMessages items={messages} isLoading={isLoading} myId={myId} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messageState.messages,
    currentdialog: state.dialogState.currentDialog,
    isLoading: state.messageState.isLoading,
    myId: state.userState.user._id,
    dialogs: state.dialogState.messages
  };
};

const mapDispatchToProps = {
  fetchMessages: messageActions.fetchMessages,
  increaseMessage: messageActions.increaseMessage,
  updateDialog: dialogActions.updateDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
