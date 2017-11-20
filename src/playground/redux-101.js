import { createStore } from 'redux';

// CreateStore will create the app store
// This method expects a function argument with the initial state
// and an action
// This is immidiately called automatically.
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET': 
      return {
        count: 0
      };
    default:
      return state;
  }
});

// get state returns current state obj
console.log('Initial State', store.getState());

// Actions: Obj that gets sent to the store and updates the app state
// Inorder to send the action to the store, it is dispatched.
// Store.dispatch will also call the createStore method again
// Increment Count
store.dispatch({
  type: 'INCREMENT'
});
console.log('Increment State', store.getState());

// Decrement Count
store.dispatch({
  type: 'DECREMENT'
});
console.log('Decrement State', store.getState());

// Reset Count
store.dispatch({
  type: 'RESET'
});
console.log('Reset State', store.getState());
