import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getVisibleExpenses } from '../selectors/visibeExpenses';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';
import ExpenseListFilters from './ExpenseListFilters';

const Dashboard = props => (
  <div className="container">
    <AddExpense total={props.expenses.length} />
    <div className="row">
      <ExpenseListFilters />
    </div>
    <ExpenseList expenses={props.expenses} />
  </div>
);

const mapStateToProps = (state) => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

// HOC using connect
const ConnectedExpenseList = connect(mapStateToProps)(Dashboard);

export default ConnectedExpenseList;
