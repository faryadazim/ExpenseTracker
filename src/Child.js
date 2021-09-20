import React, { useState, useContext } from "react";
import { GlobalStore } from "./GlobalContext";

const Child = () => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const context = useContext(GlobalStore);
  const Store = context.state;
  // context.AddFunc();
  const submitHandler = (e) => {
    e.preventDefault();
    const transactionObj = { amount, desc };
    context.AddFunc(transactionObj);
    setAmount("");
    setDesc("");
  };
  return (
    <>
      <div className="container text-center bg-info">
        <h3>
          Current Balance <br />
          $2600
        </h3>
        <div className="summary-container d-flex justify-content-center my-3 text-center">
          <h3 className="me-5 text-center">
            income <br />
            $540
          </h3>
          <h3 className="ms-5 text-center">
            Expense <br />
            $220
          </h3>
        </div>
        <div className="transaction-history my-4">
          <h3>Histrory</h3>
          <hr />
          <div className="transaction-list d-flex ">
            <ul className="mx-auto ">
              {Store.map((item, index) => {
                return (
                  <li
                    className="d-flex justify-content-center w-100 my-1 bg-warning "
                    key={index}
                  >
                    <span className="me-5 px-5 ">{item.desc}</span>
                    <span className="ms-5 px-5 my-1">{item.amount}$</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="new-transaction my-2">
          <h3>Add New Transaction</h3>
          <hr />
          <form transaction onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="">
              Enter Disccription <br />
              <input
                type="text"
                className="form-control w-100"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <br />
            <label htmlFor="">
              Enter Amount <br />
              <input
                type="text"
                className="form-control w-100"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </label>
            <br />
            <button type="submit" className="btn btn-primary mt-3">
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Child;
