import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import {forbiddenWordsMiddleware} from './middelware'


const store = createStore(rootReducer, applyMiddleware(forbiddenWordsMiddleware));


export default store;