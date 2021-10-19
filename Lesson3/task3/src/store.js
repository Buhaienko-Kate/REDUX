import { createStore, combineReducers } from 'redux';
import { userReducer } from './user.reducer.js';
import { cartReducer } from './cart.reducer.js';
import { languageReduser } from './language.reducer.js';

const appReducers = combineReducers({
  language: languageReduser,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
