import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../../../config/axiosInstance.jsx';
const loginEmployee = createAsyncThunk (
        "auth/login",
        (credentials, thunkApii) => {
                try {
                        const res = await axiosInstance.post("/auth/login", credentials);
                        console.log(res);
                        return res.data;
                } 
                catch (error) {
                        return thunkApii.rejectWithValue(error);
                }
        },
);

export default loginEmployee();