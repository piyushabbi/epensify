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
  filter: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
// ---------------------------------------------------------

// ACTION CREATORS
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

// Remove Expense Action Creator
const removeExpense = (id = '') => ({
  type: 'REMOVE_EXPENSE',
  expenseId: id
});

// Edit Expense Action Creator
const editExpense = (id=undefined, update={}) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});

// set filter text action creator
const setFilterText = (text='') => ({
  type: 'SET_FILTER_TEXT',
  text
});

// sort by amount action generator
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// sort by date action generator
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// set start date action generator
const setStartDate = (startDate=undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// set end date action generator
const setEndDate = (endDate=undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// -----------------------------------------------------------------

// REDUCERS
// Expense Reducer
const expenseReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE': {
      //console.log('ADD_EXPENSE');
      return [...state, action.expense]
    }
    case 'REMOVE_EXPENSE': {
      //console.log("REMOVE_EXPENSE");
      ////console.log('RemoveExpense', state, action);
      let newExpense = state.filter( f => f.id !== action.expenseId);
      ////console.log('New Expense', newExpense);
      return newExpense;
    }
    case 'EDIT_EXPENSE': {
      //console.log("EDIT_EXPENSE");
      ////console.log('Edit Expense', state, action); 
      return state.map(m => {
        if(m.id == action.id) {
          return {
            ...m,
            ...action.update
          };
        } else {
          return m;
        }
      })
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
    case "SET_FILTER_TEXT": {
      //console.log("SET FILTER TEXT");
      return { ...state, text: action.text };
    }
    case "SORT_BY_AMOUNT": {
      //console.log("SORT BY AMOUNT");
      return { ...state, sortBy: "amount" };
    }
    case "SORT_BY_DATE": {
      //console.log("SORT BY DATE");
      return { ...state, sortBy: "date" };
    }
    case "SET_START_DATE": {
      //console.log("SET START DATE");
      return { ...state, startDate: action.startDate };
    }
    case "SET_END_DATE": {
      //console.log("SET END DATE");
      return { ...state, endDate: action.endDate };
    }
    default:
      return state;
  }
}

// --------------------------------------------------------------------
// Filter by logic
const getFilteredData = (expenses, filter) => {
  //console.log(expenses, filter);
  if (filter) return expenses.filter(f=>f.description==filter.text);
}

// --------------------------------------------------------------------

// STORE
// Combine Reducer method that gets passed while creating the app store
const rootReducer = combineReducers({
  expenses: expenseReducer,
  filter: filterReducer
})

// Store Creation with the combinedReducer
const store = createStore(rootReducer);

store.subscribe(() => {
  //console.log(store.getState());
  const {expenses, filter} = store.getState();
  console.log( getFilteredData(expenses, filter) );
});
//----------------------------------------------------------------------

// DISPATCHING ACTION CREATORS
// Dispatch add expense action creator
let expenseOne = store.dispatch(addExpense({
  note: 'This expense is for rent.',
  description: 'Rent'
}));

// Dispatch add expense action creator
let expenseTwo = store.dispatch(addExpense({
  note: 'This expense is for coffee.',
  description: 'Coffee House'
}));
////console.log(expenseTwo);

store.dispatch(
  addExpense({
    note: "Have Tea",
    description: "Tea"
  })
);

store.dispatch(
  addExpense({
    note: "Have some tea.",
    description: "Tea"
  })
);

store.dispatch(
  addExpense({
    note: "This expense is for some coffee.",
    description: "Coffee"
  })
);

// Dispatch remove expense action creator
store.dispatch(removeExpense(expenseOne.expense.id));

// Dispatch edit expense action creator
store.dispatch(editExpense(expenseTwo.expense.id, {
  amount: 500, 
  note: 'Updated Coffee expenses.'
}));

// Dispatch set filter text
store.dispatch(setFilterText('Tea'));

// Dispatch sort by amount
store.dispatch(sortByAmount());

// Dispatch sort by date
store.dispatch(sortByDate());

// Dispatch set start date
store.dispatch(setStartDate(125));
// Dispatch set End date
store.dispatch(setEndDate(1250));
