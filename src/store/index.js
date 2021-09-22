/**
 * store
 */

import { createStore, applyMiddleware } from 'redux';
import Thunk from "redux-thunk";
import reducers from '../reducers';

const middleware = applyMiddleware(Thunk)

export function configureStore() {
   const store = createStore(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      middleware
   )
   return store;
}