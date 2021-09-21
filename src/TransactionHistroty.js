import React from "react";
import Transaction from "./Transaction.js";

const TransactionHistroty = () => {
  return (
    <>
      <div className="transaction-container">
        <h1>Transactions</h1>
        <ul className="unorderList">
          <Transaction />
        </ul>
      </div>
    </>
  );
};

export default TransactionHistroty;
