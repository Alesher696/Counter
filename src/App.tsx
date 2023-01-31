import React, {useState} from 'react';
import {Counter} from "./Counter";

const App = () => {
const maxValue = 5
const minValue = 0
    const [value, setValue] = useState(minValue)

    const incCount = () => {
        if (value < maxValue) {
            setValue(value +1)
        }
    }

    const resetCounter = () => {
        setValue(minValue)
    }

    return (
        <div>
            <Counter value={value} click={incCount} reset={resetCounter}/>
        </div>
    );
};

export default App