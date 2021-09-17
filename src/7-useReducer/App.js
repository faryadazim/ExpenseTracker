import React from "react";
import Setup from "./ReviseReducer/Index";
// import Setup from './BasicCrudApp'  ///this is an Extra activity

const App = () => {
  return (
    <>
      <div className="mx-5 px-5">
        <div className="mx-5 px-5">
          <div className="mx-5 px-5">
            <h3 className="text-center w-100">useReducer</h3>
            <Setup />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
