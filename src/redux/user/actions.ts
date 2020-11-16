import { Dispatch } from "redux";
import { loginForm } from "../../types/interfaces";
import { userApi } from '../../util/services';
import { openNotification } from '../../util/helpers';
import { axios } from "../../core";
import { ThunkDispatch } from 'redux-thunk';
import { appState } from '../store';
import { Action } from 'redux';

export enum actionTypes {
    SET_USER_DATA = "SET_USER_DATA"
};

const actions = {
    setUserData: (data: any) => ({
        type: actionTypes.SET_USER_DATA,
        payload: data
    }),
    initMe: () => (dispatch: Dispatch) => {
        return userApi.getMe().then((userData) => {
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
    fetchUserLogin: (postData: loginForm) => async (dispatch: ThunkDispatch<appState, void, Action>) => {
        try {
            const data = await userApi.login(postData);
            const { status } = data;
            if (status === "success") {
                openNotification("Успех", "Авторизация прошла успешно!", 2, "success");
                const credential = JSON.stringify(data.token);
                localStorage.setItem('token', credential);
                axios.defaults.headers.common['token'] = data.token;
                dispatch(actions.initMe());
                return;
            }
            openNotification("Ошибка при авторизации", "Неверный логин или пароль", 2, "error");
        } catch {
            openNotification("Ошибка при авторизации", "Неверный логин или пароль", 2, "error");
        }
    }
};

export default actions;
