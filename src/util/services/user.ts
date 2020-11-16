import { axios } from '../../core';
import { loginForm } from '../../types/interfaces';

export default {
    login: (postData: loginForm) => {
        return axios.post('users/login', postData).then(response => response.data);
    },
    getMe: () => {
        return axios.get('users/me').then(response => response.data);
    }
}