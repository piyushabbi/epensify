import { 
  addExpense, 
  editExpense, 
  removeExpense 
} from '../actions/expenses.actions';

import uuid from 'uuid';

// Remove Expense Test
test('should setup remove expense action', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// Edit Expense Test
test('should setup edit expense action', () => {
  const action = editExpense('123abc', {
    description: 'Coffee'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    data: {
      description: 'Coffee'
    }
  })
});

// Add Expense Test
test('should setup add expense action with no values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

// Add Expense Test
test('should setup add expense action with provided data', () => {
  const action = addExpense({
    description: 'Coffee',
    note: 'Coffee Bill',
    amount: 300,
    createdAt: 1200
  });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "Coffee",
      note: "Coffee Bill",
      amount: 300,
      createdAt: 1200
    }
  });
});
