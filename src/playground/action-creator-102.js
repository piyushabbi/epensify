import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + action.incrementBy };
    }
    case "DECREMENT": {
      return { count: state.count - action.decrementBy };
    }
    case "RESET": {
      return { count: 0 };
    }
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Action Creator will accept an argument of payload, if required
// Increment Action Creator
const incrementVal = (payload = {}) => ({
  type: 'INCREMENT',
  incrementBy: typeof(payload.incrementBy) === 'number' ? payload.incrementBy : 3
});

// Decrement Action Creator
// Making use of destructuring. And providing a default param here
const decrementVal = ({decrementBy = 11} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// Reset Action Creator
const resetVal = () => ({
  type: 'RESET'
});


// Dispactch Action Creators
// Dispatched with an object. See the function definition
store.dispatch(incrementVal({incrementBy: 5}));
store.dispatch(decrementVal({decrementBy: 2}));
store.dispatch(resetVal());
store.dispatch(incrementVal({incrementBy: 10}));
