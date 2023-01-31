import React from 'react';
import b from './button.module.css'


type SuperButtonPropsType = {
    title: string
    clickHandler: () => void
    disabled?: boolean | undefined
    value: number
}

export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {
    const {title, clickHandler, value, ...otherProps} = props

    const onclickHandler = () => {
        clickHandler()
    }

    const buttonStyle = `${b.button} ${props.disabled ? b.buttonDisabled : ''}`

    return (
        <div>
            <button
                onClick={onclickHandler}
                className={buttonStyle}
                disabled={props.disabled}
            >{title}
            </button>
        </div>
    );
};

