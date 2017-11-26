import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';

import AppRouter from './components/router';
import { store } from './store/configureStore';

import { addExpense } from './actions/expenses.actions';
import { setTextFilter } from './actions/filters.actions';
import { getVisibleExpenses } from './selectors/visibeExpenses';
 
// store.subscribe(()=>{
//   console.log(store.getState());
// });

// Dispatch AddExpense -> Water Bill
store.dispatch(addExpense({
  description: 'Water Bill',
  note: 'This is Water Bill for November',
  amount: 400,
  createdAt: 1200
}));

// Dispatch AddExpense -> Rent Bill
store.dispatch(addExpense({
  description: 'Rent',
  note: 'Rent for December',
  amount: 56000,
  createdAt: 1000
}));

// Dispatch AddExpense -> Gas Bill
store.dispatch(addExpense({
  description: 'Gas Bill',
  note: 'This is Gas Bill',
  amount: 5600,
  createdAt: 1500
}));

// Dispatch SetTextFilter -> Bill
//store.dispatch(setTextFilter('bill'));

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
