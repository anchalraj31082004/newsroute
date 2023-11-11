import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice"

export const store = configureStore({
    reducer:{
        article:articleReducer,
    }
})