import React, { useContext } from "react";
import { GlobalContent } from "../store/GlobalContext";

const Balance = () => {
  const context = useContext(GlobalContent);
  const stateValue = context.state;
  // amount
  let income = 0;
  for (let i = 0; i < stateValue.length; i++) {
    if (stateValue[i].amount > 0) {
      income += stateValue[i].amount;
    }
  }
  let expense = 0;
  for (let i = 0; i < stateValue.length; i++) {
    if (stateValue[i].amount < 0) {
      expense += stateValue[i].amount;
    }
  }
  let currentBalance = income + expense;
  return (
    <>
      <div className="balanceComponent">
        <h4>Current Balance</h4>
        <h2>${currentBalance}</h2>
      </div>
    </>
  );
};

export default Balance;
