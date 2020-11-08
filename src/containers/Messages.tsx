import React, { FunctionComponent, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { Messages as BaseMessages } from "../components/messages/Messages";
import { appState } from "../redux/store";
import { message } from "../types/interfaces";
import actions from "../redux/message/actions";

type Props = {
  messages: message[];
  fetchMessages: (id: string) => void;
  dialogId: string | null;
  isLoading: boolean;
};

const Messages: FunctionComponent<Props> = ({
  messages,
  fetchMessages,
  dialogId,
  isLoading,
}) => {
  const blockRef = useRef<HTMLDivElement | null>(null);

  const scrollToDown = (element: React.RefObject<HTMLDivElement>) => {
    window.requestAnimationFrame(() => {
      const scrollHeight = element.current!.scrollHeight;
      element.current!.scrollTo(0, scrollHeight);
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

const mapStateToProps = (state: appState) => {
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
