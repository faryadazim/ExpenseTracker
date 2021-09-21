import React, { useContext } from "react";
import { GlobalContent } from "../store/GlobalContext";

const Transaction = () => {
  const context = useContext(GlobalContent);
  const stateValue = context.state;
  const deleteTransaction = (e) => {
    context.deleteTransaction(e);
  };
  return (
    <>
      {stateValue.map((item, index) => {
        return (
          <div className="transaction-list-container">
            <button id="DeleteButton" onClick={() => deleteTransaction(index)}>
              Delete
            </button>
            <li id="TransactionListItem">
              <span className="description-class ">{item.desc}</span>
              <span className="amount-class ">{item.amount} $</span>
            </li>
          </div>
        );
      })}
    </>
  );
};

export default Transaction;
