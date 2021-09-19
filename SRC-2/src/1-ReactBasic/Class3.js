import React from "react";

let fruit = "aPlle";
const Class3 = () => {
  // Event Handling
  // Atrubutes | Onclick
  // import Export
  //  in default export we can use any names but not in named export
  const alertFunc = () => {
    alert("Alert ");
  };
  const consoleFunc = (arg) => {
    console.log("Alert ", arg, "Na");
  };
  const funct = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <div className="d-flex flex-direction-column justify-content-center">
        <button className="btn btn-primary btn-sm" onClick={alertFunc}>
          Click Here
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => consoleFunc(fruit)}
        >
          {/* we must use arrow function on event if we wanna to pass a argument  */}
          Click Argument
        </button>
        <button className="btn btn-primary btn-sm" onClick={(e) => funct(e)}>
          Click taeget
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            console.log(e.target.className);
          }}
        >
          Click taeet
        </button>
      </div>
    </>
  );
};

export default Class3;
