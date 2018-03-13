// nodejs syntax
const redux = require('redux');
const createStore = redux.createStore;

// initialize the state
const initialState = {
  counter: 0
}

// Reducer
// Always we have to copy the state(...) to not mutate it
const rootReducer = (state = initialState, action ) => {
  if (action.type === 'INC_COUNTER') {
    return{
      // copy the immutable the state
      ...state,
      // copy the immutable the counter
      counter: state.counter + 1
    };
  }
  if (action.type === 'ADD_COUNTER') {
    return{
      // copy the immutable the state
      ...state,
      // copy the immutable the counter
      counter: state.counter + action.value
    };
  }
  // return state if none of the condition is applied
  return state;
};

// Store
const store = createStore(rootReducer);
// getState() will pull out the state from the store
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// Dispatching Action
// dispatch takes like argumment the action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

