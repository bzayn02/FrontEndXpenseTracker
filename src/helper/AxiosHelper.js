import axios from 'axios';

const rootUrl = 'http://localhost:8000/api/v1';
const userAPI = rootUrl + '/users';
const loginAPI = rootUrl + '/users/login';

export const RegisterUser = (Userdata) => {
    try {
        return axios.post(userAPI, Userdata);
    } catch (error) {
        return {
            data: {
                status: 'error',
                message: error.message,
            },
        };
    }
};
export const LoginUser = (Userdata) => {
    try {
        return axios.post(loginAPI, Userdata);
    } catch (error) {
        return {
            data: {
                status: 'error',
                message: error.message,
            },
        };
    }
};
