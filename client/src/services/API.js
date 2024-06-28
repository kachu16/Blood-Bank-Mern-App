import axios from 'axios';

// setting default base URL from .env file and added axios functionality in API Variable
const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});


API.interceptors.request.use((req) => {
    // getting token from local storage and adding it to the headers
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return req;

});

export default API;