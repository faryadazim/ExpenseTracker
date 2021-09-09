import { useState } from "react";
import './App.css';

function App() {
   
  let [state, setstate] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
       <button onClick={setstate(state-1)}>Increase</button>
       <br />
       <span>
         {state}
       </span>
       <br />
       <button onClick={setstate(state+1)}>Increase</button>
      </header>
    </div>
  );
}

export default App;
