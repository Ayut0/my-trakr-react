import React from 'react'

export default function TransactionsList(props) {
  console.log(Object.values(props.transactionData));
  const transactionList = Object.values(props.transactionData).map((item) =>{
    return (
        <tr>
          <td>{item}</td>
        </tr>
    )
  })
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Transaction Type</th>
          <th>From</th>
          <th>To</th>
          <th>Category</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        {transactionList}
      </table>
    </div>
  );
}
