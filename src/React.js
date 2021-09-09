import React from 'react'
import { useContext } from 'react'
import counterContext from './counterContext' 
const Reset = ({setstate}) => {
    let counterValue=useContext(counterContext)
    console.log(counterValue.name);
    return (
        <div>
         <button onClick={() => { setstate(0) }}>Reset Value</button>   
        </div>
    )
}

export default Reset
