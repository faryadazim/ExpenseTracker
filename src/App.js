import React from 'react'
import { AccountSummary } from './components/AccountSummary'
import { AddTransaction } from './components/AddTransaction'
import { Balance } from './components/Balance'
import { TransactionHistory } from './components/TransactionHistory'
import './App.css'
import GlobalProvider from './context/GlobalState'
const App = () => {

  return (

    <div className="main-container">
      <div className="container">
        <GlobalProvider>
          <Balance />
          <AccountSummary />
          <TransactionHistory />
          <AddTransaction />
        </GlobalProvider>
      </div>
    </div>
  )
}

export default App
