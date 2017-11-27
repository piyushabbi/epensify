import expenseReducer from '../reducers/expense.reducer';
import moment from 'moment';

const expenses = [
  {
    id: "1",
    description: "Room",
    note: "",
    amount: 1200,
    createdAt: 0
  },
  {
    id: "2",
    description: "Coffee",
    note: "",
    amount: 2300,
    createdAt: moment(0).subtract(4, "days").valueOf()
  },
  {
    id: "3",
    description: "Credit Card",
    note: "Expense for CC",
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf()
  }
];

test('should setup default', () => {
  const state = expenseReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '22'
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add expense', () => {
  const expense = { 
    id: "102", 
    description: "Rock", 
    note: "", 
    amount: 900, 
    createdAt: 100 
  };
  const action = {
    type: 'ADD_EXPENSE', 
    expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense with given id', () => {

  const data = {
    amount: 90000
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: "2",
    data
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], {
    id: "2",
    description: "Coffee",
    note: "",
    amount: 90000,
    createdAt: moment(0).subtract(4, "days").valueOf()
  }, expenses[2]])
});
