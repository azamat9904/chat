import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";

import { Messages as BaseMessages } from "../components/messages/Messages";
import actions from "../redux/message/actions";

const Messages = ({
  messages,
  fetchMessages,
  dialogId,
  isLoading,
}) => {
  const blockRef = useRef(null);

  const scrollToDown = (element) => {
    window.requestAnimationFrame(() => {
      const scrollHeight = element.current.scrollHeight;
      element.current.scrollTo(0, scrollHeight);
    });
  };

  useEffect(() => {
    if (dialogId) fetchMessages(dialogId);
  }, [dialogId, fetchMessages]);

  useEffect(() => {
    scrollToDown(blockRef);
  }, [messages]);

  return (
    <div className="chat__dialog-messages" ref={blockRef}>
      <BaseMessages items={messages} isLoading={isLoading} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messageState.messages,
    dialogId: state.dialogState.currentDialogId,
    isLoading: state.messageState.isLoading,
  };
};

const mapDispatchToProps = {
  fetchMessages: actions.fetchMessages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
