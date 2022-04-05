import { createStore, compose, applyMiddleware } from 'redux';
import chunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = (
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(chunk),
));

export default store;
