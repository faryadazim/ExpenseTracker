import { useReducer } from "react"
import React  from 'react' 
import counterReducer from "./counterReducer"
const Reset = () => {
    const [state, dispatch] = useReducer(counterReducer,0)
    console.log(state);
    return (
        <div>
         <button onClick={() => {dispatch('reset')}}>Reset Value</button>   
        </div>
    )
}

export default Reset
