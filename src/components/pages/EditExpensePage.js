import React from 'react';
import ExpenseForm from '../ExpenseForm';
import { editExpense } from '../../actions/expenses.actions';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
  return (
    <div className="container">
      <h2>Edit Expense</h2>
      <div className="row">
        <ExpenseForm
          expense={props.expense}
          onSubmit={expense => {
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push("/");
          }} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
