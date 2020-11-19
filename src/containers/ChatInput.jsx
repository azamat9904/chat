import React, { useState } from 'react';
import { ChatInput as ChatInputBase } from '../components';
import { connect } from 'react-redux';
import messageActions from '../redux/message/actions';

const ChatInput = ({ createMessage }) => {
    const [value, setValue] = useState("");

    const enterPressedHandler = (e) => {
        if (e.keyCode === 13) {
            createMessage(value);
            setValue("");
        }
    }
    return <ChatInputBase value={value} setValue={setValue} enterPressedHandler={enterPressedHandler} />
}

const mapDispatchToProps = {
    createMessage: messageActions.createMessage
}

export default connect(null, mapDispatchToProps)(ChatInput);