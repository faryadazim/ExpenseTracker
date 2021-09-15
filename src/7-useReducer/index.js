import React, { useState } from "react";
import Model from "./modal";
import { Data } from "../Data";

// UseReducer
const Index = () => {
  const [persons, setPersons] = useState(Data);
  const [showModel, setShowModel] = useState(false);
  const [name, setName] = useState(""); 
  const submitHandle = (e) => {
    e.preventDefault();
    if (name) {
      setShowModel(true);
      let CreatedObj = {
      id: new Date().getTime().toString(),
      name 
    };
    setPersons([...persons, CreatedObj]);
    setName('');
    } else {
      setShowModel(true); 
    }
   

  };

  return (
    <>
      {showModel && <Model />}
      <form onSubmit={submitHandle}>
        <div>
          <input
            value={name}
            type="text"
            name="firstName"
            placeholder="Name"
            className="form-control my-2 w-50"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-info btn=sm w-50">
          Add Person
        </button>
      </form>
      <ul>

        {
          persons.map((e) => {
            
            return <li>{ e.name}</li>
            
           
          })
        }
      </ul>
    </>
  );
};

export default Index;
