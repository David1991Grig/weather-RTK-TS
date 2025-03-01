import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from '../features/slices/weatherSlice.ts';
import message from '../features/slices/messageSlice.ts';

export const store = configureStore({
    reducer: {
        weatherInfo, message
    }
})
// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store