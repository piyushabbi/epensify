import { createStore } from 'redux';

// CreateStore will create the app store
// This method expects a function argument with the initial state
// and an action
// This is immidiately called automatically.
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const incrementBy = action.incrementBy ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      };
    }
    case 'DECREMENT': {
      const decrementBy = action.decrementBy ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      };
    }
    case 'RESET': 
      return {
        count: 0
      };
    default:
      return state;
  }
});

// Subscribe to changes as the store updates
// Takes in a function argument
// Return value of subscribe is actually a function we can call to unsubscribe.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// Actions: Obj that gets sent to the store and updates the app state
// Inorder to send the action to the store, it is dispatched.
// Store.dispatch will also call the createStore method again
// Increment Count
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
store.dispatch({
  type: "INCREMENT"
});
//unsubscribe(); To unsubscribe from the watcher

// Reset Count
store.dispatch({
  type: 'RESET'
});
// Decrement Count
store.dispatch({
  type: 'DECREMENT'
});
// Decrement Count
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});
