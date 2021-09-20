// import React, { createContext, useReducer } from "react";
// import { AppReducer } from "./AppReducer";
// const initializeValue = [
//   { desc: "Salary", amount: 4000 },
//   { desc: "Income", amount: 1000 },
//   { desc: "Expense", amount: 3400 },
// ];
// export const GlobalContext = createContext(initializeValue);

// export const ContentProvider = ({ children }) => {
//   let [state, dispatch] = useReducer(AppReducer, initializeValue);
//   function addTransactions(transObj) {
//     dispatch({
//       type: "ADD_TRANSACTION",
//       payload: {
//         amount: transObj.name,
//         desc: transObj.desc,
//       },
//     });
//   }
//   return (
//     <GlobalContext.Provider value={{ transaction: state, addTransactions }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = [
  { amount: 4500, desc: "Salary" },
  { amount: 2500, desc: "Salary" },
  { amount: 500, desc: "camera" },
  { amount: 2500, desc: "car" },
];

export const GlobalStore = createContext("initialState");

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const AddFunc = (transaObj) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: { amount: transaObj.amount, desc: transaObj.desc },
    });
  };
  return (
    <GlobalStore.Provider value={{ state, AddFunc }}>
      {children}
    </GlobalStore.Provider>
  );
};
