import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers';

export const promise = () => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next);
  }
  return next(action);
};

export const logger = store => next => action => {
  console.group(action.type);
  console.log('%c prev state', 'color:gray', store.getState());
  console.log('%c action', 'color:blue', action);
  const result = next(action);
  console.log('%c next state', 'color:green', store.getState());
  console.groupEnd(action.type);
  return result;
};

const configureStore = () => {
  return createStore(
    todoApp,
    applyMiddleware(promise, logger)
  );
};

export default configureStore;
