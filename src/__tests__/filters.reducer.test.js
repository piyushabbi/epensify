import filterReducer from "../reducers/filter.reducer";

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  });
});

test('should setup sortby amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should setup sortby date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
  const currentState = {
    text: 'Abc',
    sortby: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SET_TEXT_FILTER', text: 'Rent' };
  const state = filterReducer(currentState, action);
  expect(state.text).toBe('Rent');
});

test('should setup start date', () => {
  const currentState = {
    text: '',
    sortby: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SET_START_DATE', date: 1000 };
  const state = filterReducer(currentState, action);
  expect(state.startDate).toBe(1000);
});

test('should setup end date', () => {
  const currentState = {
    text: '',
    sortby: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: 'SET_END_DATE', date: 1000 };
  const state = filterReducer(currentState, action);
  expect(state.endDate).toBe(1000);
});
