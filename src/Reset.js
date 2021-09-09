import React from 'react'

const Reset = ({setstate,state}) => {
    return (
        <div>
         <button onClick={() => { setstate(state + 1) }}>Reset Value</button>   
        </div>
    )
}

export default Reset
