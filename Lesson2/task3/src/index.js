import './index.scss';
import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Kay' }));
store.dispatch(addUser({ id: 3, name: 'Bob' }));
store.dispatch(deleteUser(3));

console.log(store.getState());
