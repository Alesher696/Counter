import React, {useEffect, useReducer} from 'react';
import {Counter} from "./Counter";
import {Setter} from "./Setter";
import {counterReducer, IncCountAC, ResetCountAC, setMinMaxValueAC} from "./reducers/counter-reducer";

export type CounterType ={
    minValue: number
    maxValue: number
    value: number
}

const App = () => {

    const initialState:CounterType ={
        value: 0,
        minValue: 0,
        maxValue: 5,
    }

    const [counter, dispatch] = useReducer(counterReducer,initialState)

    // const [minValue, setMinValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(5)
    // const [value, setValue] = useState<number>(minValue)

    // useEffect(() => {
    //     let valueAsStringMin = localStorage.getItem('counterMinValue')
    //     let valueAsStringMax = localStorage.getItem('counterMaxValue')
    //     if (valueAsStringMin && valueAsStringMax) {
    //         let newValueMin = JSON.parse(valueAsStringMin)
    //         let newValueMax = JSON.parse(valueAsStringMax)
    //         setMinValue(newValueMin)
    //         setMaxValue(newValueMax)
    //         setValue(newValueMin)
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('counterMinValue', JSON.stringify(minValue))
    //     localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    // }, [minValue, maxValue])


    const incCount = () => {
            dispatch(IncCountAC())

    }

    const resetCounter = () => {
        dispatch(ResetCountAC())
    }

    const setMinMaxValue = (minValue: number, maxValue: number) => {
        dispatch(setMinMaxValueAC(minValue, maxValue))
    }

    return (
        <div>
            <Counter value={counter.value}
                     click={incCount}
                     reset={resetCounter}
                     min={counter.minValue}
                     max={counter.maxValue}
            />
            <Setter setMinMaxValue={setMinMaxValue}
            />
        </div>
    );
};

export default App