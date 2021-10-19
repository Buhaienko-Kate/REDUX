import { createStore, combineReducers } from 'redux';
import { counterReduser } from './counter.reducer.js';
import usersReducer from './users.reducer.js';

const appReducer = combineReducers({
  counter: counterReduser,
  users: usersReducer,
});

const store = createStore(appReducer);

export default store;
