import { configureStore } from "@reduxjs/toolkit";

import savingsReducer from "../features/savingsSlice";

export const store = configureStore({
    reducer: {
        savings: savingsReducer,
    },
});