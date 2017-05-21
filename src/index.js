/*jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import reducer from './Reducers';
import App from './Containers/App';
import './css/styles.css';

const reactContainer = document.getElementById('root');

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
      </div>
    </Router>
  </Provider>,
  reactContainer
);