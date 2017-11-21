import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// App data structure
const demoState = {
  expense: {
    id: 'es3s1f4g5',
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  },
  filter: {}
};

// Add Expense Action Generator
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// Remove Expense 
const removeExpense = (id = '') => ({
  type: 'REMOVE_EXPENSE',
  expenseId: id
});

// Expense Reducer
const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': {
      return [...state, action.expense]
    }
    case 'REMOVE_EXPENSE': {
      //console.log('RemoveExpense', state, action);
      let newExpense = state.filter( f => f.id !== action.expenseId);
      //console.log('New Expense', newExpense);
      return newExpense;
    }
    default: 
      return state;
  }
}

// Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// Combine Reducer method that gets passed while creating the app store
const rootReducer = combineReducers({
  expenses: expenseReducer,
  filter: filterReducer
})

// Store Creation with the combinedReducer
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch add expense action creator
let expenseThree = store.dispatch(addExpense({
  note: 'This expense is for rent.',
  description: 'Rent'
}));

// Dispatch add expense action creator
let expenseTwo = store.dispatch(addExpense({
  note: 'This expense is for coffee.',
  description: 'Coffee House'
}));
//console.log(expenseTwo.expense.id);

// Dispatch remove expense action creator
store.dispatch(removeExpense(expenseTwo.expense.id))
