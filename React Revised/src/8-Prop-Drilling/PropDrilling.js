import React from "react";

const PropDrilling = () => {
  let name = "Ali";
  const NewFunct = () => {
    console.log("Function called");
  };

  // More Component || Causes issues
  // Fixed by ContextAPI }|| Redux (In Complex Cases)
  return (
    <>
      <Child name={name} NewFunct={NewFunct} />
    </>
  );
};

export default PropDrilling;

const Child = ({ name, NewFunct }) => {
  // More Component || Causes issues
  // Fixed by ContextAPI }|| Redux (In Complex Cases)
  return (
    <>
      <GrandChild name={name} NewFunct={NewFunct} />
    </>
  );
};

const GrandChild = ({ name, NewFunct }) => {
  // More Component || Causes issues
  // Fixed by ContextAPI }|| Redux (In Complex Cases)
  return (
    <>
      <h5>
        My Name is: <strong>{name}</strong>
      </h5>
      <button className="btn btn-sm btn-info" onClick={() => NewFunct()}>
        Call Func
      </button>
    </>
  );
};
