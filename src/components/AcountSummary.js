import React, { useContext } from "react";
import { GlobalContent } from "../store/GlobalContext";

const AcountSummary = () => {
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
  return (
    <>
      <div className="transaction-summary">
        <div className="income-box boxes">
          <h6>INCOME</h6>
          <p>{income}</p>
        </div>
        <div className="Expense-box boxes">
          <h6>Expense</h6>
          <p>{expense}</p>
        </div>
      </div>
    </>
  );
};

export default AcountSummary;
