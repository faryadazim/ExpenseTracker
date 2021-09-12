import React, { useContext } from 'react';

// Import Transaction Component
import { Transaction } from './Transaction';

export const TransactionHistory = () => {

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {/* {transactions.map(transaction =>  */}
                {/* ( */}
                <Transaction />
                {/* ) */}
                {/* )} */}
            </ul>
        </div>
    )
}
