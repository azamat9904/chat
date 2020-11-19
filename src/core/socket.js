import io from 'socket.io-client';

const socket = io('http://localhost:3003');

export const socketActionTypes = {
    DIALOG_CREATED: "SERVER:DIALOG_CREATED",
    NEW_MESSAGE: "SERVER:NEW_MESSAGE"
};

const dialogCreatedListener = (getDialogs) => {
    socket.on(socketActionTypes.DIALOG_CREATED, getDialogs);
}

const messageCreatedListener = (getMessages) => {
    socket.on(socketActionTypes.NEW_MESSAGE, getMessages);
}

const removeListener = (name, func) => {
    socket.removeListener(name, func);
}

export default { dialogCreatedListener, messageCreatedListener, removeListener };