import React from "react";
import Header from "./Header.js";
import Balance from "./Balance.js";
import AcountSummary from "./AcountSummary.js";
import TransactionHistroty from "./TransactionHistroty.js";
import AddTransaction from "./AddTransaction.js";

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
      <p> COPYRIGHT ©2020 XARB. All Rights Reserved</p>
    </div>
  );
};

export default Main;
