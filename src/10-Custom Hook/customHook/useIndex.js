import { useState, useReducer, useEffect } from "react";
import { Data } from "../../Data";
import { AppReducer } from "../components/AppReducer";

const useIndex = () => {
  const [name, setName] = useState("");
  const [deletionShow, setDeletion] = useState(true);
  const [loading, setLoading] = useState(true);

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
    console.log("delete press");
    dispatch({ type: "DELETE", payload: em });
  };
  // Modal Remover
  const modalRemover = () => {
    dispatch({ type: "REMOVAL_MODAL" });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return [
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
  ];
};

export default useIndex;
