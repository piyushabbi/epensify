import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters.actions';

const ExpenseListFilters = (props) => {
  return (
    <div className="col-sm-8">
      <input
        className="form-control" 
        type="text"
        placeholder="Search for Expense"
        value={props.filters.text}
        onChange={ (e)=> { props.dispatch(setTextFilter(e.target.value)) }} />

      <select 
        className="form-control"
        value={props.filters.sortBy}
        onChange={ (e)=> {
          e.target.value === "date" 
            ? props.dispatch(sortByDate()) 
            : props.dispatch(sortByAmount())
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
