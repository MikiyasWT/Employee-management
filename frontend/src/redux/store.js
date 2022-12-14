//import { createStore, compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
//import rootSaga from './saga/index';
import rootSaga from "../saga/index";
const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  )(createStore)(rootReducer);
  sagaMiddleware.run(rootSaga);
export default store;