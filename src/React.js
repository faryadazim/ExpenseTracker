import React from 'react'
import { useContext } from 'react'
import counterContext from './counterContext' 
const Reset = ({setstate}) => {
    let counterValue=useContext(counterContext)
    console.log(counterValue);
    console.log(counterValue[0].name);
    return (
        <div>
         <button onClick={() => { counterValue[1]( {name: 'var', roll: 45}) }}>Reset Value</button>   
        </div>
    )
}

export default Reset
