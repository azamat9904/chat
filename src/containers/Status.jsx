import React from 'react';
import { Status as StatusBase } from '../components';
import { connect } from 'react-redux';

const Status = ({ currentDialog, selectedUser }) => {
    let isOnline = null;
    let fullname = null;

    if (currentDialog) {
        isOnline = currentDialog.buddy.isOnline;
        fullname = currentDialog.buddy.fullname;
    }

    if (selectedUser) {
        isOnline = selectedUser.isOnline;
        fullname = selectedUser.fullname;
    }

    return <StatusBase
        online={isOnline}
        fullname={fullname}
    />
}

const mapStateToProps = (state) => {
    return {
        currentDialog: state.dialogState.currentDialog,
        selectedUser: state.dialogState.selectedUser
    }
}

export default connect(mapStateToProps)(Status);