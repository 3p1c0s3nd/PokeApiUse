import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slice/trainerName.slice";
import sessionLoggin from "./slice/sessionLoggin.slice";


export const store = configureStore({
    reducer: {
        trainerName,
        sessionLoggin,
    },
})

export default store