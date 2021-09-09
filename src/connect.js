import React , {useState}from 'react'
import App from "./App";
import counterContext from './counterContext';
const Connect = () => {
  const [count, setcount] = useState({
    name:"ali",roll:3456
})
  return (
    <counterContext.Provider value={count}>
      <App />
    </counterContext.Provider>
  )
}

export default Connect
