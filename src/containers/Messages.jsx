import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { Messages as BaseMessages } from "../components/messages/Messages";
import actions from "../redux/message/actions";
import socketActions, { socketActionTypes } from '../core/socket';


const Messages = ({
  messages,
  fetchMessages,
  currentdialog,
  isLoading,
  increaseMessage,
  myId
}) => {


  const blockRef = useRef(null);

  useEffect(() => {
    if (currentdialog && currentdialog._id)
      fetchMessages(currentdialog._id);

    const createMessageHandler = (message) => {
      console.log(message);
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
    myId: state.userState.user._id
  };
};

const mapDispatchToProps = {
  fetchMessages: actions.fetchMessages,
  increaseMessage: actions.increaseMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
