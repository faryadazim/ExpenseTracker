import { useState } from "react";
import './App.css';

function App() {

  const [state, setstate] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => {
          if (state === 0) {  console.log("Decrease");  } else { setstate(state - 1)  } }}>Decrease</button>
        <br />
        <span>
          {state}
        </span>
        <br />
        <button onClick={() => { setstate(state + 1) }}>Increase</button>
      </header>
    </div>
  );
}

export default App;
