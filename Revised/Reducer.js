// import { useReducer } from "react";

const initialState = 0

const Reducer = (state, action) => {
    switch (action) {

        case 'increment':
            return state + 2
        case 'decrement':
            return state - 2
        case 'reset':
            return initialState
        default:
            return state
    }
}
export default Reducer;
