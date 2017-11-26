import React from 'react';
import { addExpense } from '../../actions/expenses.actions';

import ExpenseForm from '../ExpenseForm';
import { connect } from 'react-redux';

const AddExpensePage = (props) => (
  <section className="container">
    <h2>Add Expenses</h2>
    <div className="row">
      <ExpenseForm
        idValue={props.match.params.id ? props.match.params.id : ''}
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  </section>
);

export default connect()(AddExpensePage);
