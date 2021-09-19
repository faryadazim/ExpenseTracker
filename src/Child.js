import React from "react";

const Child = () => {
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
          <div className="transaction-list">
            <ul>
              <li className="d-flex ">
                <span>caash</span>
                <span>500$</span>
              </li>
              <li>
                <span>salary</span>
                <span>500$</span>
              </li>
              <li>
                <span>used</span>
                <span>500$</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="new-transaction my-2">
          <h3>Add New Transaction</h3>
          <hr />
          <form transaction>
            <label htmlFor="">
              Enter Disccription <br />
              <input type="text" className="form-control w-100" />
            </label>
            <br />
            <label htmlFor="">
              Enter Amount <br />
              <input type="text" className="form-control w-100" />
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
