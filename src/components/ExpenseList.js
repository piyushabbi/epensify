import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses.actions';

const ExpenseList = props => (
  <section className="expense-list">
    <h3>Expenses</h3>
    {
      !props.expenses.length && <p><i>Search term does not match the expenses.</i></p>
    }
    <ol>
      { 
        props.expenses.map(expense => (
          <li key={expense.id}>
            <div><b>{expense.description}</b></div>
            <div>Note: {expense.note}</div>
            <div>Amount: {expense.amount}</div>
            <div>Created At: {expense.createdAt}</div>
            <button
              className="btn btn-danger"
              onClick={() => {
                props.dispatch(removeExpense(expense.id))
              }}
            >Remove</button>
            <hr />
          </li>
        ))
      }
    </ol>
  </section>
);

export default connect()(ExpenseList);
