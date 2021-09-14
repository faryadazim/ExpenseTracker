import React, { useState } from "react";
import { Data } from "../Data";

const BasicState = () => {
  const [data, setData] = useState(Data);
  const deleteHandler = (e) => {
    let newData = data.filter((person) => {
      return person.id !== e;
    });
    setData(newData);
  };
  return (
    <>
      {data.map((person) => {
        return (
          <>
            <h3>
              {person.id} - {person.name}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  deleteHandler(person.id);
                }}
              >
                Delete
              </button>
            </h3>
          </>
        );
      })}
      <button
        className="btn btn-sm w-100 brn-warning"
        onClick={() => setData([])}
      >
        Delete All
      </button>
    </>
  );
};

export default BasicState;
