import React, {ChangeEvent} from 'react';



type SuperInputPropsType={
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void
    inputTitle: string
    value: string
}

export const SuperInput: React.FC<SuperInputPropsType> = (props) => {
    return (
        <div>
            <label>{props.inputTitle}</label>
            <input onChange={props.onChange} value={props.value}/>
        </div>

    );
};

