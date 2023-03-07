import React, {ChangeEvent, useState} from 'react';
import {SuperButton,} from "./SuperButton";
import b from './button.module.css'
import {SuperInput} from "./SuperInput";


type SetterPropsType = {
    setMinMaxValue: (minValue: number, maxValue: number) => void
}

export const Setter: React.FC<SetterPropsType> = (props) => {


    const title = ['MinValue:', ' MaxValue:']
    const [minVal, setMin] = useState('')
    const [maxVal, setMax] = useState('')


    const minChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMin(e.currentTarget.value)

    }

    const maxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.value)

    }
    const setValueHandler = () => {
        props.setMinMaxValue(Number(minVal), Number(maxVal))
        setMin('')
        setMax('')

    }

    const setDisabler = minVal >= maxVal

    return (
        <div className={b.counter}>
            <div className={''}>
                <SuperInput
                    inputTitle={title[0]} value={minVal} onChange={minChangeHandler}/>
                <SuperInput
                    inputTitle={title[1]} value={maxVal} onChange={maxChangeHandler}/>
            </div>
            <div className={b.setArea}>
                    <SuperButton title={"Set"} clickHandler={setValueHandler} disabled={setDisabler}/>
            </div>
        </div>
    );
};

