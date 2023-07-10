import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/couterSlice'
import usersSlice from './slices/usersSlice'
export const store  = configureStore({
    reducer:{
       count: counterReducer, 
       users: usersSlice.reducer,
    }
})