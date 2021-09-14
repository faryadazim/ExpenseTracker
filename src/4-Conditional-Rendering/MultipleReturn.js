import React, { useState } from "react";

const MultipleReturn = () => {
  // we can return multiple different thing its depend on conditoins
  const [loading, setloading] = useState(false);
  if (loading) {
    return (
      <>
        <h3> Loading </h3>
        <button
          className="btn btn-sm btn-success text-light"
          onClick={() => {
            setloading(!loading);
          }}
        >
          Done Loading
        </button>
      </>
    );
  }
  return (
    <>
      <h3> Multiple Return </h3>
      <button
        className="btn btn-sm btn-success text-light"
        onClick={() => {
          setloading(!loading);
        }}
      >
        Done Loading
      </button>
    </>
  );
};

export default MultipleReturn;
