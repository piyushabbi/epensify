import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../actions/filters.actions';

const ExpenseListFilters = (props) => {
  return (
    <div>
      <input 
        className="form-control" 
        type="text"
        placeholder="Search for Expense"
        value={props.filters.text}
        onChange={ (e)=> { props.dispatch(setTextFilter(e.target.value)) }} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
