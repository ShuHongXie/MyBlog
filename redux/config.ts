import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import logger from 'redux-logger';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);
/* global __DEV__  */
// middlewares.push(logger);


const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

/**
 * 
 * @param {*} reducers 
 * @param {*} rootSaga 
 * @param {*} [initialState] 初始store值 可选
 */
const configureStore = (reducers,rootSaga,initialState) => {
  const rootReducer = combineReducers(reducers);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;