import React , {useState}from 'react'
import App from "./App";
import counterContext from './counterContext';
const Connect = () => {
  const  countContext = useState({
    name:"ali",roll:3456
})
  return (
    <counterContext.Provider value={countContext}>
      <App />
    </counterContext.Provider>
  )
}

export default Connect
