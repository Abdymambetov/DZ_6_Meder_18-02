import React from 'react';
import {firstValueAction, secValueAction, plusValueAction, multiValueAction, minusValueAction, divValueAction} from "../../store/countSLice";
import {useDispatch, useSelector} from "react-redux";

function CountPage(props) {
    const dispatch = useDispatch()
    const {result} = useSelector(state => state.countReducer)

    const oneNumber = (e) => {
        dispatch(firstValueAction(e.target.value))
    }

    const twoNumber = (e) => {
        dispatch(secValueAction(e.target.value))
    }

    const plusNum = () => {
        dispatch(plusValueAction())
    }

    const minusNum = () => {
        dispatch(minusValueAction())
    }
    const multiNum = () => {
        dispatch(multiValueAction())
    }
    const divNum = () => {
        dispatch(divValueAction())
    }
    return (
        <>
            <input type='number' placeholder='Enter first number' onChange={oneNumber}/>
            <input type='number' placeholder='Enter second number' onChange={twoNumber}/>
            <hr/>
            <button onClick={plusNum}>+</button>
            <button onClick={minusNum}>-</button>
            <button onClick={multiNum}>*</button>
            <button onClick={divNum}>/</button>
            <hr/>
            <h1>{result}</h1>
        </>
    );
}

export default CountPage;