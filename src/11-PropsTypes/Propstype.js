import React from "react";
import { Data } from "../Data";
import Student from "./Student";

const Propstype = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Profile__</th>
            <th>Roll No__</th>
            <th>Student_Name__</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((person) => {
            return <Student {...person} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Propstype;
