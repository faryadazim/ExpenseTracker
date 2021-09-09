import { useState } from "react";
import './App.css';

function App() {
  const [state, setstate] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
       <button>Increase</button>
       <br />
       <span>
         {state}
       </span>
       <br />
       <button>Increase</button>
      </header>
    </div>
  );
}

export default App;
