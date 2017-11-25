import { createStore, combineReducers } from 'redux';

import uuid from 'uuid';

/**
 * Demo State Object
 * To show what all things are we keeping track of.
 */
const demoState = {
  expenses: [
    {
      id: 'dededed',
      description: 'Jan Rent',
      note: 'This is a final rent.',
      amount: 2500,
      createdAt: 0 // timestamp
    }
  ],
  filters: {
    sortBy: 'date', // or amount
    text: 'rent',
    startDate: undefined,
    endDate: undefined
  }
};

// ADD_EXPENSE
const addExpense = ({ 
  description = '', 
  note = '', 
  amount = 0, 
  createdAt = 0 
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense : {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, data) => ({
  type: 'EDIT_EXPENSE',
  id,
  data
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SET_START_DATE
const setStartDate = (date=undefined) => ({
  type: 'SET_START_DATE',
  date
});

// SET_END_DATE
const setEndDate = (date=undefined) => ({
  type: 'SET_END_DATE',
  date
});

// EXPENSE REDUCER
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE' : {
      return [...state, action.expense];
    }
    case 'REMOVE_EXPENSE' : {
      return state.filter(expense => expense.id !== action.id);
    }
    case 'EDIT_EXPENSE' : {
      return state.map(expense => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.data
          }
        } else {
          return expense;
        }
      })
    }
    default: return state;
  }
}

// FILTER REDUCER
const filterReducerDefaultState = {
  sortBy: 'date',
  text: '',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER' : {
      return {...state, text: action.text}
    }
    case 'SORT_BY_DATE': {
      return {...state, sortBy: 'date'}
    }
    case 'SORT_BY_AMOUNT': {
      return {...state, sortBy: 'amount'}
    }
    case 'SET_START_DATE': {
      return {...state, startDate: action.date}
    }
    case 'SET_END_DATE': {
      return {...state, endDate: action.date}
    }
    default: return state;
  }
};

// RootReducer
const rootReducer = combineReducers({
  expenses: expenseReducer,
  filters: filterReducer
});

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof(endDate) !== 'number' || expense.createdAt <= endDate;;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt<b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount<b.amount ? 1 : -1;
    }
  })
};

// CREATE STORE WITH COMBINED REDUCERS
const store = createStore(rootReducer);

store.subscribe(() => {
  //console.log(store.getState());
  const {expenses, filters} = store.getState();
  console.log(getVisibleExpenses(expenses, filters));
});

//DISPATCH ACTIONS 
const expenseOne = store.dispatch(addExpense({
  description: 'Tea',
  note: 'This is for Tea',
  createdAt: 100,
  amount: 20
}));

// store.dispatch(editExpense(expenseOne.expense.id, {
//   description: 'Coffee',
//   note: 'This is a very expensive coffee.'
// }));

store.dispatch(addExpense({
  description: 'Rent',
  note: 'This is for Feb',
  createdAt: 200,
  amount: 1200
}));

// //store.dispatch(removeExpense(expenseOne.expense.id));

//store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(200));
