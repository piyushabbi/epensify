import React from 'react';

const ExpenseList = props => (
  <section className="expense-list">
    <h3>Expenses</h3>
    <ul>
      {props.expenses.map(expense => (
        <li key={expense.id}>
          <div><b>{expense.title}</b></div>
          <div>{expense.description}</div>
          <div>{expense.amount}</div>
          <hr />
        </li>
      ))}
    </ul>
  </section>
);

export default ExpenseList;
