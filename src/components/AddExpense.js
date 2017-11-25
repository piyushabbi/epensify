import React from 'react';

const AddExpense = (props) => (
  <section className="add-expense">
    <p>You are viewing { props.total } expense(s).</p>
    <button className="btn btn-success">Add Expense</button>
  </section> 
);

export default AddExpense;
