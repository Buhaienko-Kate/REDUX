import { createStore } from 'redux';
import counterReduser from './counter.reduser';

const store = createStore(counterReduser);

export default store;
