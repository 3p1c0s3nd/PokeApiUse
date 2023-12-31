import { createSlice } from "@reduxjs/toolkit";

export const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setTrainerName: (currentValue, action) => action.payload,
    }
})

export const { setTrainerName } = trainerNameSlice.actions

export default trainerNameSlice.reducer;