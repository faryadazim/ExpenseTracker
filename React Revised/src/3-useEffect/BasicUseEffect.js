import React, { useState, useEffect } from "react";

const BasicUseEffect = () => {
  const [value, setValue] = useState(0);
  let a = "Compinent Rendered";

  //// ........................

  //// by default it Run on every re render at end
  useEffect(() => {
    console.log("UseEffect");
    if (value !== 0) {
      // Keep Remember we cannot use Hooks in Conditions mean in ifelsee we cannt use Hook
      document.title = value;
    }
  });

  //.......................

  // it run on initial renfered just once
  useEffect(() => {
    console.log("UseEffect only on initial render never again");
  }, []);
  // by default it run if dependencies change
  useEffect(() => {
    console.log("UseEffect with dependencies");
    if (value !== 0) {
      document.title = value;
    }
  }, [value]); //it will onlly run if dependencies value change

  //.......................

  console.log(a);
  return (
    <>
      <h2>{a}</h2>
      <button className="btn btn-primary" onClick={() => setValue(value + 1)}>
        ReRendered {value}
      </button>
    </>
  );
};

export default BasicUseEffect;
