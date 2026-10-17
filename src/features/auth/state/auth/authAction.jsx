
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../config/axiosInstance.jsx";

export const loginEmployee = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            const res = await axiosInstance.post(
                "/auth/login",
                credentials
            );
            return res.data;
        } catch (error) {
            console.log(error);
            thunkApi.rejectWithValue("Login failed");

        }
    }
);

export const registerEmployee = createAsyncThunk(
    "auth/register",
    async (credentials, thunkApi) => {
        try {
            const res = await axiosInstance.post(
                "/auth/register",
                credentials
            );
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                "Registration failed"
            );
        }
    }
);

export const currentLoggedEmployee = createAsyncThunk(
    "auth/me",
    async (_, thunkApi) => {
        try {
            const res = await axiosInstance.get("/auth/me");
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                "Unable to fetch current employee"
            );
        }
    }
);
