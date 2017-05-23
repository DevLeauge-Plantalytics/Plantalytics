/*jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
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
//import SupplierSignUp from './Components/Body/Suppliers/Supplier_Sign_Up'
//import SupplierProfile from './Components/Body/Suppliers/Supplier_Profile'
//import SupplierList from './Components/Body/Suppliers/Supplier_List'
//import Conversation from '.Componenst/Body/Messages/Message_Conversation'
//import Inbox from '.Componenst/Body/Messages/Message_Inbox'

const reactContainer = document.getElementById('root');

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
        <Route exact path="/plantalytics/users/:id/dashboard" component={Dashboard}/>
        <Route exact path="/plantalytics/users/:id/locations" component={SavedLocations}/>
        <Route path="/plantalytics/location/:address" component={AnalysisPage}/>
      </div>
    </Router>
  </Provider>,
  reactContainer
);

//Site-Analysis Routes

// User Routes




// Supplier Routes
//<Route exact path="/plantalytics/supplier/sign-up" component={SupplierSignUp}/>
//<Route exact path="/plantalytics/supplier/listing" component={Supplier_List}/>
//<Route exact path="/plantalytics/supplier/:id/profile" component={Supplier_Profile}/>

// Messages Routes
//<Route exact path="/plantalytics/messages/:user_id/inbox" component={Conversation}/>
//<Route exact path="/plantalytics/messages/conversation" component={Inbox}/>

