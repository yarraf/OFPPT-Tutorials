import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import products from "./reducers/products";
import { getAllProducts } from "./actions";
import reducer from './reducers'

const middleware = [thunk]
const store = createStore(reducer, ...middleware)

store.dispatch(getAllProducts())
// export default store;
