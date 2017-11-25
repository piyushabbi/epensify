import { combineReducers } from 'redux';

import expenseReducer from './expense.reducer';
import filterReducer from './filter.reducer';

export const rootReducer = combineReducers({
  expenses: expenseReducer,
  filters: filterReducer
});
