import React, { useState } from 'react'

export default function Transaction(props) {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.accountId === ''){
      alert('Make sure you select the account');
      return
    }else if (formData.accountIdFrom === ""){
      alert("Make sure you select the sender account");
      return
    }else if (formData.accountIdTo === ""){
      alert("Make sure you select the receiver account");
      return
    }else if (formData.accountIdFrom === formData.accountIdTo) {
      alert("You can't transfer money");
      return;
    } else if (formData.category === "") {
      alert("Make sure you select the category");
      return;
    }

    setTransactions(formData);
    props.setTransactionData(formData);
  };
  return (
    <section>
      <h2>New Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            name="type"
            value="Deposit"
            onChange={handleChange}
          />{" "}
          Deposit
          <input
            type="radio"
            name="type"
            value="Withdrawal"
            onChange={handleChange}
          />{" "}
          Withdrawal
          <input
            type="radio"
            name="type"
            value="Transfer"
            onChange={handleChange}
          />{" "}
          Transfer
        </div>
        <select onChange={handleChange} name="accountId">
          <option value="">AccountId</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select name="accountIdFrom" onChange={handleChange}>
          <option value="">AccountFrom</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select name="accountIdTo" onChange={handleChange}>
          <option value="">AccountTo</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select name="category" onChange={handleChange}>
          <option value="">Category</option>
          <option value="1">test</option>
          <option value="2">sample</option>
        </select>
        <input type="text" name="description" required onChange={handleChange} />
        <input type="number" name="amount" required onChange={handleChange} />
        <button type="submit">Add transaction</button>
      </form>
    </section>
  );
}
