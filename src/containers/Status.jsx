import React from 'react';
import { Status as StatusBase } from '../components';
import { connect } from 'react-redux';

const Status = ({ currentDialogId, myId, dialogs }) => {
    const currentDialog = dialogs.find((dialog) => dialog._id === currentDialogId);
    let isOnline = null;
    let fullname = null;

    if (currentDialog) {
        const partner = myId === currentDialog.author._id ? currentDialog.partner : currentDialog.author;
        isOnline = partner.isOnline;
        fullname = partner.fullname;
    }

    return <StatusBase online={isOnline} fullname={fullname} />
}

const mapStateToProps = (state) => {
    return {
        currentDialogId: state.dialogState.currentDialogId,
        dialogs: state.dialogState.messages,
        myId: state.userState.user.id
    }
}

export default connect(mapStateToProps)(Status);