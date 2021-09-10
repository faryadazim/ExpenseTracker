import React from 'react'

const Main = () => {
    return (
        <>
            <div className="container main-container">
                <div className="header">
                <h2>Expense Tracker</h2>    
                </div>
                <div className="banner">
                    <div className="current-balance">
                        <h4> Your Balance is : $260</h4> 
                         </div>
                    <div className="breif-balance">
                        <div className=" text-start ps-2 income-balance">Income :   $567</div>
                        <div className=" text-end pe-2  expense-balance">Expense :   $267</div>

                    </div>
                </div>
                <div className="history-section">
                <h4>History</h4>
                    <ul className="scrol-here">
                       
                        <li> <button className="btn  cross">x</button> <span className="history-list">  <span>Iphone</span><span>-99$</span> </span> </li>
                        <li> <button className="btn  cross">x</button> <span className="history-list">  <span>Iphone</span><span>-99$</span> </span> </li>
                        <li> <button className="btn  cross">x</button> <span className="history-list">  <span>Iphone</span><span>-99$</span> </span> </li>
                        <li> <button className="btn  cross">x</button> <span className="history-list">  <span>Iphone</span><span>-99$</span> </span> </li>
                        <li> <button className="btn  cross">x</button> <span className="history-list">  <span>Iphone</span><span>-99$</span> </span> </li>
                        <li> <button className="btn  cross">x</button> <span className="history-list">  <span>Iphone</span><span>-99$</span> </span> </li>
                        <li> <button className="btn  cross">x</button> <span className="history-list">  <span>Iphone</span><span>-99$</span> </span> </li>
                         
                       
                    </ul>
                </div>
                <div className="form-section">
                    <h4>Add New Transaction</h4>
                    <form >

                        <label htmlFor="disc">
                            Enter Discription
                        </label>
                            <input id="disc" className="form-control w-100" type="text" placeholder="Label Discription" required />
                    
                        <label htmlFor="amount">
                            Enter Amount
                        </label>
                            <input  id="amount" className="form-control w-100" type="text" placeholder="Positive => +Income  /Negative -Expense"  required/>
                      
                    <button className="btn mt-2  btn-sm btn-outline-secondary w-100  " type="submit">
                        Add Transaction
                    </button>

                    </form>  
                </div>
            </div>
           
        </>
    )
}

export default Main
