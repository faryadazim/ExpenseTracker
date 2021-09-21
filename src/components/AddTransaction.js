import React, { useState, useContext } from "react";
import { GlobalContent } from "../store/GlobalContext";

const AddTransaction = () => {
  const context = useContext(GlobalContent);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  //  payload: objTrans.payload;
  const submitHandler = (e) => {
    e.preventDefault();
    let intAmount = parseInt(amount);
    let objUpdated = {
      desc,
      amount: intAmount,
    };

    context.addTransaction(objUpdated);
    setDesc("");
    setAmount("");
  };
  return (
    <>
      <div className="transaction-container2">
        <h1>Add New Transaction</h1>
      </div>
      <div className="form-body">
        <form onSubmit={(e) => submitHandler(e)}>
          <div>
            <label htmlFor="Description">Description</label> <br />
            <input
              className="form-control form-control-sm"
              type="text"
              value={desc}
              id="Description"
              placeholder="salary, shpping, tax etc..."
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <br />{" "}
            <input
              value={amount}
              className="form-control form-control-sm"
              type="number"
              id="Amount"
              placeholder="+ Income / -Expense"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <button className="btn  btn-sm  submittion-button">
            Add Transaction
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
