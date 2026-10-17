import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: localStorage.getItem("theme") || "dark",
    },
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "dark" ? "Light" : "dark";
            localStorage.setItem("theme", state.mode);

        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
