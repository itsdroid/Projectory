import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./features/auth/state/auth/authSlice.jsx";
import authReducer from "../features/auth/state/auth/authSlice.jsx";


const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;