import 'unfetch/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider, ReactReduxContext } from 'react-redux';

import 'src/styles/index.css';
import Home from 'src/views/Home';
import Address from 'src/views/Address';
import * as serviceWorker from 'src/serviceWorker';
import configureStore, { history } from 'src/configureStore';

const store = configureStore();
const rootElement = document.getElementById('root');

const app = (
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <ConnectedRouter history={history} context={ReactReduxContext}>
        <Switch>
          <Home path="/" exact />
          <Address path="/:cep" exact />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>
);

if (rootElement && rootElement.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}


serviceWorker.unregister();
