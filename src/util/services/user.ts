import { axios } from '../../core';
import { loginForm, registerForm } from '../../types/interfaces';

export default {
    login: (postData: loginForm) => {
        return axios.post('users/login', postData).then(response => response.data);
    },
    getMe: () => {
        return axios.get('users/me').then(response => response.data);
    },
    register: (userData: registerForm) => {
        return axios.post('users').then(response => response.data);
    }
}