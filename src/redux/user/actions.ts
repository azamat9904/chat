import { Dispatch } from "redux";
import { loginForm, registerForm } from "../../types/interfaces";
import { userApi } from '../../util/services';
import { axios } from "../../core";
import { ThunkDispatch } from 'redux-thunk';
import { appState } from '../store';
import { Action } from 'redux';

export enum actionTypes {
    SET_USER_DATA = "SET_USER_DATA",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_FAILED = "FETCH_USER_FAILED"
};

const actions = {
    setUserData: (data: any) => ({
        type: actionTypes.SET_USER_DATA,
        payload: data
    }),
    initMe: () => (dispatch: Dispatch) => {
        userApi.getMe().then((userData) => {
            const user = JSON.stringify(userData);
            localStorage.setItem('user', user);
            dispatch(actions.setUserData(userData));
        });
    },
    initApp: () => (dispatch: Dispatch) => {
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        if (token && user) {
            token = JSON.parse(token);
            axios.defaults.headers.common['token'] = token;
            user = JSON.parse(user);
            dispatch(actions.setUserData(user));
        }
    },
    fetchUserSuccess: () => ({
        type: actionTypes.FETCH_USER_SUCCESS
    }),
    fetchUserError: () => ({
        type: actionTypes.FETCH_USER_FAILED
    }),
    fetchUserLogin: (postData: loginForm) => (dispatch: ThunkDispatch<appState, void, Action>) => {
        return userApi.login(postData).then((data) => {
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
            dispatch(actions.fetchUserError());
        })
    },

    registerUser: (userData: registerForm) => async (dispatch: Dispatch) => {

    }
};

export default actions;
