import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';

import createRootReducer from 'src/store';
import rootSaga from 'src/store/saga';

export const history = createBrowserHistory();
export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState?: any) {
  const composeEnhancer: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancer(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(routerMiddleware(history)),
    ),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
