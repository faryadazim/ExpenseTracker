import React, { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [value, setvalue] = useState(window.innerWidth);
  const checkSize = () => {
    setvalue(window.innerWidth); 
  };
  useEffect(() => {
    console.log("add Event Listener call" , value);
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

    console.log('Component Rendered');
  return (
    <>
      <div className="bg-info text-center">
        <br />
        <h2>Window size Event Listeening</h2>
        <br />
        <h4> {value}</h4>
        <br />
      </div>
    </>
  );
};

export default UseEffectCleanUp;
