import React, { useState } from 'react';
import { ChatInput as ChatInputBase } from '../components';
import { connect } from 'react-redux';
import messageActions from '../redux/message/actions';
import dialogActions from '../redux/dialog/actions';

const ChatInput = ({ createMessage, createDialog, currentDialog, currentUser }) => {
    const [value, setValue] = useState("");

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
        currentUser: state.dialogState.selectedUser
    }
}

const mapDispatchToProps = {
    createMessage: messageActions.createMessage,
    createDialog: dialogActions.createDialog,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);