import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../../../config/axiosInstance.jsx';

const loginEmployee = createAsyncThunk (
        "auth/login",
       async (credentials, thunkApi) => {
                try {
                        const res = await axiosInstance.post("/auth/login", credentials);
                        console.log(res);
                        return res.data;
                } 
                catch (error) {
                        return thunkApi.rejectWithValue(error);
                        console.log(error);
                }
        },
);

export default loginEmployee;