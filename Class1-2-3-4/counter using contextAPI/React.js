import React from 'react'

const Reset = ({setstate,state}) => {
    return (
        <div>
         <button onClick={() => { setstate(0) }}>Reset Value</button>   
        </div>
    )
}

export default Reset
