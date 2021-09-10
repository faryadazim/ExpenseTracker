import React , {useState}from 'react'
import App from "./App";
import counterContext from './counterContext';
const Connect = () => {
  const  countContext = useState(0)
//   const  countContext = useState({ //this will return an array as value and setValue
//     name:"ali",roll:3456
// })
  return (
    <counterContext.Provider value={countContext}>
      <App />
    </counterContext.Provider>
  )
}

export default Connect
