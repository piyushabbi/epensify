import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';

//----------------------------------------------------------------


//----------------------------------------------------------------

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expenses: [{
        id: 1,
        title: "Rent",
        description: "",
        createdAt: 1000,
        amount: 200
      },
      {
        id: 2,
        title: "Food",
        description: "Dominos",
        createdAt: 100,
        amount: 400
      }]
    }
  }
  render () {
    return (
      <div className="container">
        <AddExpense total={this.state.expenses.length} />
        <ExpenseList expenses={this.state.expenses}/>
      </div>
    )
  }
}

export default Dashboard;
