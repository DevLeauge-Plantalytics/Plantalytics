/*jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import reducer from './Reducers';

import './css/styles.css';

import App from './Containers/App';

import AnalysisPage from './Components/Body/Analysis-Page'
import UserLogin from './Containers/Body/Login';
import UserSignUp from './Containers/Body/Sign-Up';
import Dashboard from './Components/Body/Dashboard'
import EditUser from './Containers/Body/Edit-User-Form';
import UserProfile from './Components/Body/User-Profile';
import SavedLocations from './Components/Body/Save-Locations';
// import SupplierSignUp from './Components/Body/Suppliers/Supplier_Sign_Up'
import Supplier_Profile from './Components/Body/Supplier-Profile'
import Supplier_List from './Components/Body/Supplier-List'
import Conversation from './Components/Body/Conversation'
import Inbox from './Components/Body/Inbox'

const reactContainer = document.getElementById('root');

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" render={()=>(<Redirect to="/plantalytics"/>)}/>
        <Route path="/plantalytics" component={App}/>
        <Route path="/plantalytics/sign-up" component={UserSignUp}/>
        <Route path="/plantalytics/login" component={UserLogin}/>
        <Route path="/plantalytics/users/:id/profile" component={UserProfile}/>
        <Route path="/plantalytics/users/:id/edit" component={EditUser}/>
        <Route path="/plantalytics/users/:id/dashboard" component={Dashboard}/>
        <Route path="/plantalytics/users/:id/locations" component={SavedLocations}/>
        <Route path="/plantalytics/location/:address" component={AnalysisPage}/>
        <Route path="/plantalytics/supplier/listing" component={Supplier_List}/>
        <Route path="/plantalytics/supplier/:id/profile" component={Supplier_Profile}/>
        <Route path="/plantalytics/messages/conversation" component={Conversation}/>
        <Route path="/plantalytics/messages/:user_id/inbox" component={Inbox}/>
      </div>
    </Router>
  </Provider>,
  reactContainer
);


