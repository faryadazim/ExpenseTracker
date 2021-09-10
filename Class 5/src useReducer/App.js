import { useState ,useReducer } from "react";
import './App.css';
import Reset from './Reset.js'
import counterReducer from "./counterReducer";
function App() {
 
  const [state, dispatch] = useReducer(counterReducer, 0);

  const [isMorning, setisMorning] = useState(false)
  return (
    <div className="App">
      <header className={` lalanntop ${isMorning ? 'App-Day' : 'App-Night'}`}>
        <button onClick={() => { setisMorning(!isMorning) }}> Time</button>
        <button onClick={() => {
          if (state === 0) { console.log("Decrease"); } else 
          { dispatch('decrement') }
        }}>Decrease</button>
        <br />{
          isMorning ? <h1 style={{ color: "grey" }}> Teeto patia na kr</h1> : <h1> Masti kr rya hn</h1>
        }
        <span>

          {state}
        </span>
        <br />
        <Reset />

        <button onClick={() => { dispatch('increment')}}>Increase</button>
      </header>
    </div>
  );
}

export default App;
