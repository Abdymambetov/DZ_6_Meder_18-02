import {configureStore} from "@reduxjs/toolkit";
import countReducer from './countSLice'

export const store = configureStore({
    reducer: {
        countReducer
    }
})