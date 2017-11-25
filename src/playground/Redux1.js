import {createStore} from 'redux';

/**
 * CreateStore
 * @param 1 Reducer Function
 */
const store = createStore((state = {count:0}, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + action.value };
    }
    case "DECREMENT": {
      return { count: state.count - action.value };
    }
    case "RESET": {
      return { count: 0 }
    }
    default: {
      return state;
    }
  }
});

/**
 * Store Subscribe
 * Watch for store changes
 * @returns Function to remove subscription
 */
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

/**
 * Action Creators
 * Instead of dispatching plain action objects,
 * Dispatch action creators that returns actions. Better for error handling
 * @returns {Action}
 */
const incrementCount = (value) => ({
  type: 'INCREMENT',
  value
});
const decrementCount = (value) => ({
  type: 'DECREMENT',
  value
});
const resetCount = () => ({
  type: 'RESET'
});

/**
 * Dispatch
 * store.dispatch will dispatch an action object to the store
 * that will trigger the update of store.
 */
store.dispatch(incrementCount(1));
store.dispatch(incrementCount(5));
store.dispatch(resetCount());
store.dispatch(decrementCount(3));
