import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance.js";
import AcountSummary from "./components/AcountSummary.js";
import TransactionHistroty from "./components/TransactionHistroty.js";
import AddTransaction from "./components/AddTransaction.js";

const Main = () => {
  return (
    <div className="main-body">
      <div className="main-container">
        <Header />
        <Balance />
        <AcountSummary />
        <TransactionHistroty />
        <AddTransaction />
      </div>
    </div>
  );
};

export default Main;
