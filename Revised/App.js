import React, { useContext } from 'react'
import { counterContext } from './counterContext'
const App = () => {
  const count = useContext(counterContext)
  console.log("count : " , count);




  let greeting = 'Hello'
  let name = 'ali'
  return (
    <div className="app-div">
      {/* <h2>{greeting}</h2>
      <h2>{name}</h2> */}
      {/* <p>{let x = 34}</p>   here we must need a value which return  something in jsx*/}
      {/* <p>{3 * 34}</p> */}
    </div>
  )
}


/////////////////   Just For Reference
// const App = () => {
//   return ( 
//     React.createElement('div', {}, React.createElement('h2', {}, 'Hello'))
//   )
// }

export default App
