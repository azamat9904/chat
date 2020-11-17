import { userApi } from '../../util/services';
import { axios } from "../../core";

export const actionTypes = {
    SET_USER_DATA: "SET_USER_DATA",
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
    FETCH_USER_FAILED: "FETCH_USER_FAILED",
    FETCH_USER_CLEAR: "FETCH_USER_CLEAR"
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
                dispatch(actions.fetchUserSuccess());
                return;
            }
            dispatch(actions.fetchUserError());
        }).catch(() => {
            if (setSubmitting) setSubmitting(false);
            dispatch(actions.fetchUserError());
        })
    },

    registerUser: (userData) => async (dispatch) => {

    }
};

export default actions;