import React from 'react'
import { useContext } from 'react'
import counterContext from './counterContext'
const Reset = ({setstate,state}) => {
    let counterValue=useContext(counterContext)
    console.log(counterValue);
    return (
        
        <div>
         <button onClick={() => { setstate(state + 1) }}>Reset Value</button>   
        </div>
    )
}

export default Reset
