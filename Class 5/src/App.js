import { useState, useContext } from "react";
import './App.css';
import Reset from './React.js'
import counterContext  from "./counterContext";
function App() {

  const count = useContext(counterContext)
  const [isMorning, setisMorning] = useState(false)
  return (
    <div className="App">
      <header className={` lalanntop ${isMorning ? 'App-Day' : 'App-Night'}`}>
        <button onClick={() => { setisMorning(!isMorning) }}> Time</button>
        <button onClick={() => {
          if (count[0] === 0) { console.log("Decrease"); } else { count[1](count[0] - 1) }
        }}>Decrease</button>
        <br />{
          isMorning ? <h1 style={{ color: "grey" }}> Teeto patia na kr</h1> : <h1> Masti kr rya hn</h1>
        }
        <span>

          {count[0]}
        </span>
        <br />
        <Reset />

        <button onClick={() => { count[1](count[0] + 1) }}>Increase</button>
      </header>
    </div>
  );
}

export default App;
