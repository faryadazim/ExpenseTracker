import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Creating Store throgh contextAPI
const InitialState = [];
export const GlobalContent = createContext("InitialState");

// Creating React Funcion As GlobalProvider
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);

  function addTransaction(objTrans) {
    dispatch({ type: "ADD_TRANSACTION", payload: objTrans });
  }
  function deleteTransaction(e) {
    dispatch({ type: "DELETE_TRANSACTION", payload: e });
  }

  return (
    <GlobalContent.Provider
      value={{ state, addTransaction, deleteTransaction }}
    >
      {children}
    </GlobalContent.Provider>
  );
};
export default GlobalProvider;
