import { useState } from "react";
import './App.css';
import Reset from './React.js'
function App() {

  const [state, setstate] = useState(0)
  const [isMorning, setisMorning] = useState(false)
  return (
    <div className="App">
      <header className={  ` lalanntop ${isMorning ? 'App-Day':'App-Night'}`}>
        <button onClick={() =>{setisMorning(!isMorning)}}> Time</button>
        <button onClick={() => {
          if (state === 0) {  console.log("Decrease");  } else { setstate(state - 1)  } }}>Decrease</button>
        <br />
        <span>
          {state}
        </span>
        <br />
        <Reset   state={state} setstate={setstate}/>
      
        <button onClick={() => { setstate(state + 1) }}>Increase</button>
      </header>
    </div>
  );
}

export default App;
