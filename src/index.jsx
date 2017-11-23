import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppContainer from 'containers/AppContainer';
import sudokuApp from 'reducers/';

const store = createStore(
  sudokuApp,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
