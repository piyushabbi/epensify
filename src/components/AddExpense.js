import React from 'react';

import {Link} from 'react-router-dom';

const AddExpense = (props) => (
  <section className="add-expense">
    <p>You are viewing { props.total } expense(s).</p>
    <Link to='/create' className="btn btn-success">Add Expense</Link>
  </section> 
);

export default AddExpense;
