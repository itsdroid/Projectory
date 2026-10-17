import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth/authSlice.jsx";
import themeReducer from "../shared/state/themeSlice.jsx";


const store = configureStore({
    reducer: {
        auth: authReducer,
        theme: themeReducer,
    }
});

export default store;