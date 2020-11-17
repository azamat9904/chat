import { axios } from '../../core';

export default {
    login: (postData) => {
        return axios.post('users/login', postData).then(response => response.data);
    },
    getMe: () => {
        return axios.get('users/me').then(response => response.data);
    },
    register: (userData) => {
        return axios.post('users', userData).then(response => response.data);
    },
    verifyUser: (hash) => {
        return axios.get('users/verify?hash=' + hash).then(response => response.data);
    }
}