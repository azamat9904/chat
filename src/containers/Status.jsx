import React from 'react';
import { Status as StatusBase } from '../components';
import { connect } from 'react-redux';

const Status = ({ currentDialogId, myId, dialogs }) => {
    const currentDialog = dialogs.find((dialog) => dialog._id === currentDialogId);
    let isOnline = null;
    let fullname = null;

    if (currentDialog) {
        isOnline = currentDialog.buddy.isOnline;
        fullname = currentDialog.buddy.fullname;
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