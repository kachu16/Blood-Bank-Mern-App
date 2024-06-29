import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/API';
import { toast } from 'react-toastify';

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/login', { role, email, password });
            console.log(data)
            //store token to localstorage
            if (data.success) {
                localStorage.setItem('token', data.token);
                toast.success(data.message);
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