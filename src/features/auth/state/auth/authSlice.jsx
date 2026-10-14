import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        employee: null,
        isLoading: false,
        value: 0,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee = action.payload;
            state.isLoading = false;
        },

        removeEmployee: (state) => {
            state.employee = null;
            state.isLoading = false;
        },

        increment: (state) => {
            state.value += 1;
        }
    }
});

export let { addEmployee, removeEmployee, increment } = authSlice.actions;
export default authSlice.reducer;