import { createSlice } from "@reduxjs/toolkit";

export const sessionLogginSlice = createSlice({
    name: 'sessionLoggin',
    initialState: false,
    reducers: {
        setSessionLoggin: (state, action) => action.payload
    }
})

export const { setSessionLoggin } = sessionLogginSlice.actions;

export default sessionLogginSlice.reducer