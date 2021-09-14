import React, { useState } from "react";
// import Setup from "./BasicState";
// import Setup from "./UseStateOBJ";
import Setup from "./CounterState";

// if we change variable value which have been use in component it will not rerendered for this purpose we need to use Hooks

// Rules
// 1 "use"
// 2 component name start with capital
// 3 Hooks only works in Functional component
// 4 cannot call in conditionalyy here it doesnot mean that we cannt use it in ifelse its will be better explained during useEffect Session

const App = () => {
  // const [text, settext] = useState(" React Start useState");

  return (
    <React.Fragment>
      {/* <h3>Advance {text}</h3>
      <button className="btn btn-sm btn-primary" onClick={() => settext(45)}>
        Change State
      </button> */}
      <Setup />
    </React.Fragment>
  );
};

export default App;
