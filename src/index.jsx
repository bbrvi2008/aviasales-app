import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducer';

import AviasalesApp from './components/AviasalesApp';

import 'normalize.css';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <AviasalesApp/>
  </Provider>,
  document.getElementById('root')
);
