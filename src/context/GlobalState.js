import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
const initialState = {
    transactions: [
        { id: 1, desc: "Salary", amount: 4500 },
        { id: 2, desc: "income", amount: 3500 },
        { id: 3, desc: "car", amount: -2500 },
        { id: 4, desc: "iphone", amount: -500 }
    ]
}
// creating a global context 
export const GlobalConext = createContext(initialState)

// creating a global provider 
const GlobalProvider = ({ children }) => {

    // Creating a reducer 
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalConext.Provider value={state.transactions}>
            {children}
        </GlobalConext.Provider>
    )
}

export default GlobalProvider;


