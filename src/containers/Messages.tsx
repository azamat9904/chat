import React, { FunctionComponent, useEffect } from "react";
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
  useEffect(() => {
    if (dialogId) fetchMessages(dialogId);
  }, [dialogId, fetchMessages]);

  return <BaseMessages items={messages} isLoading={isLoading} />;
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
