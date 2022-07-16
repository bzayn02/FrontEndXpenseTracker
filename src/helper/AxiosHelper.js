import axios from 'axios';

const rootUrl = 'http://localhost:8000/api/v1';
const userAPI = rootUrl + '/users';
const loginAPI = rootUrl + '/users/login';
const expenseAPI = rootUrl + '/expensetracker';

// User APIs
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

// Expenses APIs
export const postExpenses = async (Expensedata) => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const { data } = await axios.post(expenseAPI, Expensedata, {
            headers: {
                Authorization: user._id,
            },
        });
        return data;
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
        };
    }
};
export const getExpenses = async () => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const { data } = await axios.get(expenseAPI, {
            headers: {
                Authorization: user._id,
            },
        });
        return data;
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
        };
    }
};
export const deleteExpense = async (_id) => {
    try {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const { data } = await axios.delete(expenseAPI + '/' + _id, {
            headers: {
                Authorization: user._id,
            },
        });
        return data;
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
        };
    }
};
