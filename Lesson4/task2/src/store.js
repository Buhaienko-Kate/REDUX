import { createStore, combineReducers } from 'redux';
import counterReduser from './counter/counter.reduser';
import { userReducer } from './users/users.reducer';

const reducer = combineReducers({
  users: userReducer,
  counter: counterReduser,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
