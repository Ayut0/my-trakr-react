import React, { useState } from 'react'
import Account from './Account'
import AccountSummary from './AccountSummary'
import Transaction from './Transaction.jsx'
import TransactionsList from './TransactionsList'

export default function Main() {
  const [transactionData, setTransactionData] = useState([]);
  return (
    <main>
      <Account />
      <Transaction setTransactionData={setTransactionData}/>
      {/* <AccountSummary /> */}
      <TransactionsList transactionData={transactionData}/>
    </main>
  )
}
