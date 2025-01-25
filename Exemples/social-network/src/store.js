import {createStore} from 'redux';
import { loginStateReducer } from './reducers/loginReducer';

const store = createStore(loginStateReducer);

export default store;