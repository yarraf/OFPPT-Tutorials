import React from 'react'
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {thunk} from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './App'

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

store.dispatch(getAllProducts())
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);