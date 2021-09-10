import React from 'react'
import AccountSummary from './component/AccountSummary'
import AddTransactionHistory from './component/AddTransactionHistory'
import Balance from './component/Balance'
import Header from './component/Header'
import TransactionHistory from './component/TransactionHistory'
const Main = () => {
   
    return (
        <>
            <div className="container main-container">
               <Header/>
                <Balance/>
                <AccountSummary/>
                <TransactionHistory/>
                <AddTransactionHistory/>
            </div>

        </>
    )
}

export default Main
