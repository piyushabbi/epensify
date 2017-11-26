import { 
  setTextFilter, 
  sortByAmount, 
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters.actions';

import moment from 'moment';

test('should setup text filter action with value', () => {
  const action = setTextFilter('Rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Rent'
  });
});

test('should setup text filter action with no value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sortby date action', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should setup sortby amount action', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup start date action', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should setup end date action', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});
