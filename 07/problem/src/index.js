import 'babel-polyfill';
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Root from './components/Root';
import todoApp from './reducers';

const store = createStore(todoApp);
render(
  <Root store={store} />,
  document.getElementById('root')
);
