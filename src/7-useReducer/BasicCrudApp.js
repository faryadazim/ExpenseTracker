import React, { useState, useReducer, useEffect } from "react";
import Model from "./modal";
import { Data } from "../Data";
import {AppReducer} from "./AppReducer";

// UseReducer

const Index = () => {
 
  ////....<<<                 Default Values                   >>>......////

  const defaultValues = {
    persons: Data,
    isModelShow: false,
    showModelContent: "",
  };
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(AppReducer, defaultValues);

  ////....<<<                 Submittion Function                   >>>......////

  const submitHandle = (e) => {
    e.preventDefault();
    const newData = { id: new Date().getTime().toString(), name };
    if (name) {
      dispatch({ type: "ADD_ITEM", payload: newData });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  ////....<<<                 deleteFunc Function                   >>>......////
  const deleteFunc = (em) => {
    const newFilteredData = state.persons.filter((user) => {
      if (user.id !== em) {
        return user;
      }
    });
    console.log(newFilteredData);
    dispatch({ type: "DELETE", payload: newFilteredData });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
 
  ////....<<<                 Component Body    >               >>......////

  return (
    <>
      {state.isModelShow && (
        <Model
          showModelContent={state.showModelContent}
          closeModal={closeModal}
        />
      )}
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
        <button type="submit" className="btn btn-info mt-2 w-50">
          Add Person
        </button>
      </form>
      <div>
        {state.persons.map((person, index) => {
          let sr = index + 1;
          return (
            <>
              <h5 className="mt-3 w-50 text-center " key={person.id}>
                <span className="mx-3">{sr}</span>
                {person.name}
              </h5>
              <button
                onClick={() => {
                  deleteFunc(person.id);
                }}
                className="btn btn-sm w-50 btn-danger"
              >
                DELETE
              </button>
            </>
          );
        })}
      </div>
      <button
        onClick={() => {dispatch({ type: "DELETE_ALL" });}}
        className="btn btn-sm mt-3 w-50 btn-danger"
      >
        DELETE ALL
      </button>
    </>
  );
};

export default Index;
