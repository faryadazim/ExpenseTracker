import React, { useState } from "react";

const UseStateOBJ = () => {
  const [ObjData, setObjData] = useState({ name: "Ali", roll: 2333 });
  const changeHandler = () => {
    setObjData({ ...ObjData, ...{ message: "Na bholay na" } });
  };
  const replaceHandler = () => {
    setObjData({ ...ObjData, ...{ name: "Bhola Record" } });
    //   setObjData({ ...ObjData, name: "Bhola Record" } );
    //   Replacing
    //   we can also change these value by giving one by one value as state
  };
  return (
    <>
      <h2>Obj Dealing</h2>
      <h3>
        {ObjData.roll} -{ObjData.name} - {ObjData.message}
        <button className="btn btnsm btn-secondary" onClick={changeHandler}>
          Add New Key :Value
        </button>
        <button className="btn btnsm btn-success" onClick={replaceHandler}>
          Change Value
        </button>
      </h3>
    </>
  );
};

export default UseStateOBJ;
