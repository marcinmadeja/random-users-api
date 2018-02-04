import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import 'styles/main.css';

import configureStore from './app-redux/store/store';

import AppWrapper from './App/AppWrapper';
import registerServiceWorker from './registerServiceWorker';

const preloadedState = {
  selectedUser: null,
  usersList: [],
};

const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
