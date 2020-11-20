import React, { useEffect, useState } from 'react';
import { ChatInput as ChatInputBase } from '../components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import messageActions from '../redux/message/actions';
import dialogActions from '../redux/dialog/actions';

const ChatInput = ({
    createMessage,
    createDialog,
    currentDialog,
    currentUser,
    createDialogSuccess,
    dialogId,
    createDialogClear,
    ...props
}) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        if (createDialogSuccess) {
            props.history.push('/dialogs?id=' + dialogId);
        }
        return createDialogClear
    }, [createDialogSuccess])

    const enterPressedHandler = (e) => {
        if (e.keyCode === 13) {
            if (currentDialog)
                createMessage(value);

            if (currentUser)
                createDialog(value);

            setValue("");
        }
    }
    return <ChatInputBase value={value} setValue={setValue} enterPressedHandler={enterPressedHandler} />
}

const mapStateToProps = (state) => {
    return {
        currentDialog: state.dialogState.currentDialog,
        currentUser: state.dialogState.selectedUser,
        createDialogSuccess: state.dialogState.createDialogSuccess,
        dialogId: state.dialogState.dialogId
    }
}

const mapDispatchToProps = {
    createMessage: messageActions.createMessage,
    createDialog: dialogActions.createDialog,
    createDialogClear: dialogActions.createDialogClear
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatInput));