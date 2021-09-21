import React, { useState } from "react";

const CounterState = () => {
  const [value, setValue] = useState(0);
  const lateFunc = () => {
    setTimeout(() => {
      setValue((value) => {
        return value + 1;
      });
      // must return im arrow Funct
    }, 2000);
  };
  return (
    <>
      <div className="ms-5 d-flex" flex-direction-row>
        <div>
          <h2>ComplexCounter</h2>
          {value} <br />
          <button onClick={lateFunc} className="btn btn-primary btn-sm">
            Increase After 2 Sec
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterState;
