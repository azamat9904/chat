import { userApi } from '../../util/services';
import { axios } from "../../core";

export const actionTypes = {
    SET_USER_DATA: "SET_USER_DATA",
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
    FETCH_USER_FAILED: "FETCH_USER_FAILED",
    FETCH_USER_CLEAR: "FETCH_USER_CLEAR",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAILED: "REGISTER_FAILED",
    REGISTER_CLEAR: "REGISTER_CLEAR",
    VERIFY_USER_SUCCESS: "VERIFY_USER_SUCCESS",
    VERIFY_USER_FAILED: "VERIFY_USER_FAILED",
    VERIFY_USER_CLEAR: "VERIFY_USER_CLEAR"
}

const actions = {
    setUserData: (data) => ({
        type: actionTypes.SET_USER_DATA,
        payload: data
    }),
    initMe: () => (dispatch) => {
        userApi.getMe().then((userData) => {
            const user = JSON.stringify(userData);
            localStorage.setItem('user', user);
            dispatch(actions.setUserData(userData));
            dispatch(actions.fetchUserSuccess());
        });
    },
    initApp: () => (dispatch) => {
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        if (token && user) {
            token = JSON.parse(token);
            axios.defaults.headers.common['token'] = token;
            user = JSON.parse(user);
            dispatch(actions.setUserData(user));
        }
    },
    fetchUserClear: () => ({
        type: actionTypes.FETCH_USER_CLEAR
    }),
    fetchUserSuccess: () => ({
        type: actionTypes.FETCH_USER_SUCCESS
    }),
    fetchUserError: () => ({
        type: actionTypes.FETCH_USER_FAILED
    }),
    fetchUserLogin: (postData, setSubmitting) => (dispatch) => {
        userApi.login(postData).then((data) => {
            if (setSubmitting) setSubmitting(false);
            const { status } = data;
            if (status === "success") {
                const credential = JSON.stringify(data.token);
                localStorage.setItem('token', credential);
                axios.defaults.headers.common['token'] = data.token;
                dispatch(actions.initMe());
                return;
            }
            dispatch(actions.fetchUserError());
        }).catch(() => {
            if (setSubmitting) setSubmitting(false);
            dispatch(actions.fetchUserError());
        })
    },
    registerSuccess: () => ({
        type: actionTypes.REGISTER_SUCCESS
    }),
    registerFailed: (registerError) => ({
        type: actionTypes.REGISTER_FAILED,
        payload: registerError
    }),
    registerClear: () => ({
        type: actionTypes.REGISTER_CLEAR
    }),
    registerUser: (userData, setSubmitting) => (dispatch) => {
        userApi.register(userData).then(() => {
            if (setSubmitting) setSubmitting(false);
            dispatch(actions.registerSuccess());
        }).catch((e) => {
            if (setSubmitting) setSubmitting(false);
            dispatch(actions.registerFailed(e));
        })
    },
    verfyUserSuccess: () => ({
        type: actionTypes.VERIFY_USER_SUCCESS
    }),
    verifyUserFailed: (error) => ({
        type: actionTypes.VERIFY_USER_FAILED,
        payload: error
    }),
    verifyUserClear: () => ({
        type: actionTypes.VERIFY_USER_CLEAR
    }),
    verifyUser: (hash) => (dispatch) => {
        userApi.verifyUser(hash).then(() => {
            dispatch(actions.verfyUserSuccess());
        }).catch((e) => {
            dispatch(actions.verifyUserFailed(e.response.data));
        })
    }
};

export default actions;
