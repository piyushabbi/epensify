import React from 'react';
import moment from 'moment';
import "react-dates/initialize";
import { SingleDatePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";

import { addExpense } from '../actions/expenses.actions';

class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? props.expense.amount.toString() : '',
      note: props.expense ? props.expense.note :'',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      errorString: ''
    };
    this.amountChangeHandler = this.amountChangeHandler.bind(this);
    this.dateChangeHandler = this.dateChangeHandler.bind(this);
    this.calenderFocusChangeHandler = this.calenderFocusChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }
  amountChangeHandler (e) {
    let amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  dateChangeHandler (createdAt) {
    if (createdAt) {
      this.setState({ createdAt });
    }
  }
  calenderFocusChangeHandler ({focused}) {
    debugger;
    this.setState({
      calenderFocused: focused
    })
  }
  formSubmitHandler(e) {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      // Set Error State
      this.setState({
        errorString: 'Please provide description and amount.'
      });
    } else {
      // Clear Error
      this.setState({
        errorString: ''
      });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <form className="col-sm-8" onSubmit={this.formSubmitHandler}>
        {
          this.state.errorString && 
          <div className="alert alert-danger">
            <strong>Alert! </strong>
            {this.state.errorString}
          </div>
        }
        <input 
          className="form-control"
          placeholder="Description"
          type="text"
          autoFocus
          value={this.state.description}
          onChange={e=>{this.setState({description: e.target.value})}}
        />
        <input 
          className="form-control"
          placeholder="Amount"
          type="text"
          value={this.state.amount}
          onChange={this.amountChangeHandler}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={createdAt => this.setState({ createdAt })}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })} 
          numberOfMonths={1}
          isOutsideRange={() => false} // To make every date available
        />
        <textarea
          className="form-control"
          placeholder="Add a note for the expense (optional)"
          value={this.state.note}
          onChange={e=>{this.setState({note: e.target.value})}}
        ></textarea>
        <button className="btn btn-warning">Add Expense</button>
      </form>
    );
  }
}

export default ExpenseForm;
