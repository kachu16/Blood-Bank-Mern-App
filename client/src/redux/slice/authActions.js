import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/API';
import { toast } from 'react-toastify';
import axios from 'axios';

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { rejectWithValue }) => {
        debugger;
        try {
            console.log(role, email, password);
            const { data } = await axios.post('http://localhost:8000/api/v1/auth/login', { role, email, password });
            //store token to localstorage
            if (data.success) {
                localStorage.setItem('token', data.token);
                toast.success(data.message);
                window.location.replace('/');
            }

            return data;
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)


export const userRegister = createAsyncThunk(
    'auth/register',
    async ({ role, email, password, name, organizationName, hospitalName, address, phone }, { rejectWithValue }) => {
        debugger;
        try {
            const { data } = await API.post('/auth/register', { role, email, password, name, organizationName, hospitalName, address, phone });
            if (data.success) {
                toast.success(data.message);
                window.location.replace('/login');
            }
            return data;
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)

// get current user

export const getCurrentUser = createAsyncThunk(
    'auth/current-user',
    async ({ rejectWithValue }) => {
        try {
            const res = await API.get('/auth/current-user');
            if(res?.data){
                console.log(res);
                return res?.data;

            }
        }
        catch (err) {
            if (err.response && err.response.data.message) {
                return rejectWithValue(err.response.data.message);
            }
            else {
                return rejectWithValue(err.message);
            }
        }
    }
)