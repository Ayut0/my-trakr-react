import React from 'react'
import { useState } from 'react';

export default function Account() {
    const [accounts, setAccounts] = useState([]);
    const [accountName, setAccountName] = useState("");
    const postAccount = (event) => {
        event.preventDefault();
        const newAccount = {
            id: accounts.length+1,
            name: accountName,
            transactions:[]
        }
        const updateAccounts = [...accounts, newAccount];
        setAccounts(updateAccounts);
    }
    const handleAccountName = (event) => {
        const newAccountName = event.target.value;
        setAccountName(newAccountName);
    }
    
  return (
    <section>
        <form onSubmit={postAccount}>
            <h2>New Account</h2>
          <input value={accountName} onChange={handleAccountName}/>
          <button>Add new account</button>
        </form>
        <ul>{accounts.map(account => <li>{account.name}</li>)}</ul>
    </section>
  )
}
