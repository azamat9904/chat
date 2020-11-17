import { axios } from '../../core';

export default {
    login: (postData) => {
        return axios.post('users/login', postData).then(response => response.data);
    },
    getMe: () => {
        return axios.get('users/me').then(response => response.data);
    },
    register: (userData) => {
        return axios.post('users').then(response => response.data);
    }
}