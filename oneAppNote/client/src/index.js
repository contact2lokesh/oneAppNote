import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import { rootReducer } from './redux/reducers';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
     <App />
  </Router>
  </Provider>,
  document.getElementById('root') 
);

