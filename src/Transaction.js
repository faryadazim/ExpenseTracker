import React, { useState } from "react";

const Transaction = () => {
  // const [isButton, setisButton] = useState(false);
  return (
    <>
      <div className="transaction-list-container">
        <button id="DeleteButton" onClick={() => console.log("delete")}>
          Delete
        </button>
        <li id="TransactionListItem">
          <span className="description-class ">Bill 1</span>
          <span className="amount-class ">-100 $</span>
        </li>
      </div>
      <div className="transaction-list-container">
        <button id="DeleteButton" onClick={() => console.log("delete")}>
          Delete
        </button>
        <li id="TransactionListItem">
          <span className="description-class ">Bill 1</span>
          <span className="amount-class ">-100 $</span>
        </li>
      </div>
      <div className="transaction-list-container">
        <button id="DeleteButton" onClick={() => console.log("delete")}>
          Delete
        </button>
        <li id="TransactionListItem">
          <span className="description-class ">Bill 1</span>
          <span className="amount-class ">-100 $</span>
        </li>
      </div>
      <div className="transaction-list-container">
        <button id="DeleteButton" onClick={() => console.log("delete")}>
          Delete
        </button>
        <li id="TransactionListItem">
          <span className="description-class ">Bill 1</span>
          <span className="amount-class ">-100 $</span>
        </li>
      </div>
      <div className="transaction-list-container">
        <button id="DeleteButton" onClick={() => console.log("delete")}>
          Delete
        </button>
        <li id="TransactionListItem">
          <span className="description-class ">Bill 1</span>
          <span className="amount-class ">-100 $</span>
        </li>
      </div>
    </>
  );
};

export default Transaction;
