import {createSlice} from "@reduxjs/toolkit";

const countSLice = createSlice({
    name: 'countSlice',
    initialState: {
        firstInp: 0,
        secInp: 0,
        result: 0
    },
    reducers: {
        firstValueAction: (state, action) => {
            state.firstInp = action.payload
        },
        secValueAction: (state, action) => {
            state.secInp = action.payload
        },
        plusValueAction: (state, action) => {
            state.result = state.firstInp !== 0 && state.secInp!== 0 ? +state.firstInp + +state.secInp : alert('Заполните оба поля для плюса')
        },
        minusValueAction: (state, action) => {
            state.result = state.firstInp !== 0 && state.secInp!== 0 ? +state.firstInp - +state.secInp : alert('Заполните оба поля для минуса')
        },
        multiValueAction: (state, action) => {
            state.result = state.firstInp !== 0 && state.secInp!== 0 ? +state.firstInp * +state.secInp : alert('Заполните оба поля для умножения')
        },
        divValueAction: (state, action) => {
            state.result = state.firstInp !== 0 && state.secInp!== 0 ? +state.firstInp / +state.secInp : alert('Заполните оба поля для деления')
        }
    }
})

export const {firstValueAction, secValueAction, plusValueAction, minusValueAction, divValueAction, multiValueAction} =countSLice.actions;

export default countSLice.reducer