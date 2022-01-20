import React, { useState } from "react";
// Short circuit Evaluation
// ternary Operrator

// If (){ ....   }              ===          ShortCircuits
// If (){ ....   } else {}      ===          TernaryOperator

// ifelse Condition is not allowed in jsx bcux it doesnot return expression/value

const ShortCircuits = () => {
  // <<<   ShortCircuits    >>>>
  const [text, setText] = useState("");
  const [isError, setisError] = useState(false);

  return (
    <div>
      <h3> First Condition : {text || " John"}</h3>
      <h3> Second Condition : {text && text}</h3>
      {/* <button
        className="btn btn-danger btn-sm w-75"
        onClick={() => setisError(!isError)}
      >
        Error Handling
      </button> */}

      {isError && <h3>Error ...</h3>}

      {/* Ternary Operator  */}
      <button
        className="btn btn-danger btn-sm w-75"
        onClick={() => setisError(!isError)}
      >
        {isError ? "Remove Error" : <>ShowError</>}
      </button>
    </div>
  );
};

export default ShortCircuits;
