import {CounterType} from "../App";


type IncCountACType ={
    type:'INC-COUNT'
}

type ResetCountACType={
    type: 'RESET-COUNTER'
}

type setMinMaxValueACType ={
    type:'SET-MIN-MAX-VALUE'
    minValue: number
    maxValue: number
}
export type ActionType = IncCountACType | ResetCountACType | setMinMaxValueACType

export const counterReducer = (state: CounterType, action: ActionType): CounterType => {
    switch (action.type) {
        case 'INC-COUNT': {
            if (state.value < state.maxValue) {
                return {...state, value: ++state.value}
            } else
            return state
        }
        case 'RESET-COUNTER':{
            return {...state, value: state.minValue}
        }
        case 'SET-MIN-MAX-VALUE':{
            return { ...state, value : action.minValue, minValue: action.minValue, maxValue: action.maxValue}
        }
        default:
            return state
    }
}


export const IncCountAC =()=>{
    return{
        type:'INC-COUNT'
    }as const
}


export const ResetCountAC=()=>{
    return{
type:'RESET-COUNTER'
    }as const
}


export const setMinMaxValueAC =(minValue:number, maxValue:number)=>{
    return{
        type:'SET-MIN-MAX-VALUE',
        minValue,
        maxValue
    }as const
}