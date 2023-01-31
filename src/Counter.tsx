import React, {useState} from 'react';
import {SuperButton} from "./SuperButton";
import b from './button.module.css'

type CounterPropsType = {
    value: number
    click: () => void
    reset: () => void
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const { value,  click,  reset } = props

    let title = {
        title1: 'inc',
        title2: 'reset'
    }

    const maxValueStyle = `${b.value} ${props.value === 5 ? b.valueRed : ''} `

    const DisablerInc = props.value === 5
    const DisablerReset = props.value === 0

    return (
        <div className={b.counter}>
            <div className={maxValueStyle}>
                {value}
            </div>

        <div className={b.buttons}>
            <div >
                <SuperButton
                    title={title.title1}
                    clickHandler={click}
                    disabled={DisablerInc}
                    value={value}
                />
            </div>

            <div>
                <SuperButton
                    title={title.title2}
                    clickHandler={reset}
                    value={value}
                    disabled={DisablerReset}
                />
            </div>
        </div>
        </div>
    );
};

