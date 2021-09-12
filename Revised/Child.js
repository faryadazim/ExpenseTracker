import React from 'react'
import { useContext } from 'react';
import { counterContext } from './counterContext';
import GrandChild from './GrandChild.js';

const Child = () => {
    const count = useContext(counterContext)

    return (
        <div>
            <h1>Hello {count[0]} </h1>
            <h1 onClick={() => count[1](4)}>Hello </h1>
            <GrandChild />
        </div>
    )
}

export default Child
