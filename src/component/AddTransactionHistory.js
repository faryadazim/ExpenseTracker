import React from 'react'

const AddTransactionHistory = () => {
    return (
        <div className="form-section">
                    <h4>Add New Transaction</h4>
                    <form >

                        <label htmlFor="disc">
                            Enter Discription
                        </label>
                        <input id="disc" className=" form-control-sm form-control w-100" type="text" placeholder="Label Discription" required />

                        <label htmlFor="amount">
                            Enter Amount
                        </label>
                        <input id="amount" className=" form-control-sm form-control w-100" type="text" placeholder="Positive => +Income  /Negative -Expense" required />

                        <input className="btn mt-2  btn-sm btn-outline-secondary w-100  " type="submit" value="Add Transaction" />


                    </form>
                </div>
    )
}

export default AddTransactionHistory
