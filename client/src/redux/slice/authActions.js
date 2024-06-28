import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../services/API';
import { toast } from 'react-toastify';

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ role, email, password }, { rejectWithValue }) => {
        try {
            const { data } = API.post('/auth/login', { role, email, password });

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