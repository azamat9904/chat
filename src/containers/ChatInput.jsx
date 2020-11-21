import React, { useEffect, useState } from 'react';
import { ChatInput as ChatInputBase } from '../components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Emoji } from 'emoji-mart'

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
    const [showSmiles, setShowSmiles] = useState(false);

    useEffect(() => {
        if (createDialogSuccess) {
            props.history.push('/dialogs?id=' + dialogId);
        }
        return createDialogClear
    }, [createDialogSuccess])

    const enterPressedHandler = (e) => {
        if (e.keyCode === 13 && value.trim()) {
            if (currentDialog)
                createMessage(value);

            if (currentUser)
                createDialog(value);

            setValue("");
        }
    }

    const addEmoji = (e) => {
        const sym = e.unified.split('-');
        const codesArray = [];
        sym.forEach(el => codesArray.push('0x' + el));
        const emoji = String.fromCodePoint(...codesArray);
        setValue(value + emoji);
    }


    return <ChatInputBase
        value={value}
        setValue={setValue}
        enterPressedHandler={enterPressedHandler}
        showSmiles={showSmiles}
        setShowSmiles={setShowSmiles}
        addEmoji={addEmoji}
    />
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