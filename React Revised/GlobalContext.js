import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = [];

export const GlobalStore = createContext("initialState");

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const AddFunc = (transaObj) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { amount: transaObj.amount, desc: transaObj.desc },
    });
  };
  const DeleteFunc = (e) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: e,
    });
  };
  return (
    <GlobalStore.Provider value={{ state, AddFunc, DeleteFunc }}>
      {children}
    </GlobalStore.Provider>
  );
};
