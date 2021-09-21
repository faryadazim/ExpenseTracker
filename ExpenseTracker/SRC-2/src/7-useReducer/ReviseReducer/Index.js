import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { Data } from "../../Data";
import { AppReducer } from "./AppReducer";
const Index = () => {
  const [name, setName] = useState("");
  const [deletionShow, setDeletion] = useState(true);

  // Default Values
  const defaultValues = {
    persons: Data,
    isModalOpen: false,
    modelContent: "Welcome Back Young Man",
  };
  // useReducer
  const [state, dispatch] = useReducer(AppReducer, defaultValues);
  // Functions Decleration
  // Submittion
  const handlerSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      id: new Date().getTime().toString(),
      name,
    };
    if (name) {
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
      setDeletion(true);
    } else {
      dispatch({ type: "NO_VALUE" });
      console.log(state.modelContent);
    }
  };
  // Deletion
  const deleteHandler = (em) => {
    dispatch({ type: "DELETE", payload: em });
  };
  // Modal Remover
  const modalRemover = () => {
    dispatch({ type: "REMOVAL_MODAL" });
  };
  //  if (state.persons) {
  //  }
  return (
    <>
      {state.isModalOpen && (
        <Modal modelContent={state.modelContent} modalRemover={modalRemover} />
      )}

      <form onSubmit={handlerSubmit}>
        <input
          style={{ borderRadius: "25px" }}
          type="text"
          className="form-control w-100 mt-3 form-control-sm"
          placeholder="Name Here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          style={{ borderRadius: "25px" }}
          type="submit"
          className="w-100 btn-sm btn btn-info mt-3"
        >
          Submit User
        </button>
      </form>
      <div>
        {state.persons.map((person) => {
          return (
            <div className="d-flex mt-3">
              <input
                style={{
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
                type="text"
                className=" text-center form-control form-control-sm w-75  "
                value={person.name}
              />
              <button
                style={{
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                  borderTopRightRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
                className="btn btn-danger w-25 btn-sm"
                onClick={() => deleteHandler(person.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      {deletionShow && (
        <button
          style={{
            borderRadius: "25px",
          }}
          className="btn btn-danger w-100 btn-sm mt-3"
          onClick={() => {
            dispatch({ type: "DELETE_ALL" });
            setDeletion(false);
          }}
        >
          Delete All
        </button>
      )}
    </>
  );
};

export default Index;
