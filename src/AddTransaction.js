import React from "react";

const AddTransaction = () => {
  return (
    <>
      <div className="transaction-container2">
        <h1>Add New Transactions</h1>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="Description">Description</label>
            <br />{" "}
            <input className="form-control" type="text" id="Description" />
          </div>
          <div>
            <label htmlFor="Amount">Amount</label>
            <br />{" "}
            <input
              className="form-control"
              type="text"
              id="Amount"
              placeholder="+ Addition/ -Expense"
            />
          </div>
          <button className="btn btn-primary">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
