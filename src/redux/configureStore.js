import { applyMiddleware, compose, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import appReducers from './../reducers';
// import rootSaga from './../sagas';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

// const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(appReducers, composeEnhancers(...enhancers));
  // sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
