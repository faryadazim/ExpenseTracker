import React from 'react'
import Setup from "./BasicUseEffect.js";
const App = () => {
    // useEffect is like sideEffect used to:
        // fetching data , changing title ,sign up for subcription ,Event listening
        // ita qorks utside the component 
    return (
        <div>
        <Setup/>  
        </div>
    )
}

export default App
