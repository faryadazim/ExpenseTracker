import React from "react";
import useIndex from "../customHook/useIndex";
import Modal from "./Modal";
const Index = () => {
  const [
    deleteHandler,
    modalRemover,
    handlerSubmit,
    deletionShow,
    setDeletion,
    name,
    setName,
    state,
    dispatch,
    loading,
    setLoading,
  ] = useIndex();

  // although its an custom hook but still we need to use word 'use' before calling hook morever we can also parse parameter (argument) to this hook in case to make

  // const [state, dispatch] = useReducer(AppReducer, defaultValues);
  return (
    <>
      {loading ? (
        <>
          <h3 className="text-center text-warning">Loading ...</h3>
        </>
      ) : (
        <>
          {state.isModalOpen && (
            <Modal
              modelContent={state.modelContent}
              modalRemover={modalRemover}
            />
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
      )}
    </>
  );
};

export default Index;
