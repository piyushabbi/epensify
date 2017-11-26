import { getVisibleExpenses } from '../selectors/visibeExpenses';
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
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: "3",
    description: "Credit Card",
    note: "Expense for CC",
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[2], expenses[1]
  ]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([
    expenses[2], expenses[0], expenses[1]
  ]);
});
