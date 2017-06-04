 /*jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import reducer from './Reducers';

import App from './Containers/App';
import UserLogin from './Pages/Login';
import UserSignUp from './Pages/Signup';

import AnalysisPage from './Pages/Analysis-Page';
import Dashboard from './Pages/Dashboard';
import EditUser from './Containers/Edit-User-Form';
import UserProfile from './Pages/User-Profile';
import OtherUserProfile from './Pages/Other-User-Profile';
import RequestPage from './Pages/Request';

import listOfRequests from './Pages/ListRequests';
import listOfQuotations from './Pages/ListQuotations';
import listOfTrades from './Pages/Trades';

import SavedLocations from './Components/Body/Save-Locations';
// import SupplierSignUp from './Components/Body/Suppliers/Supplier_Sign_Up'
import Supplier_Profile from './Components/Body/Supplier-Profile';
import Supplier_List from './Components/Body/Supplier-List';
import Conversation from './Components/Body/Conversation';
import Inbox from './Containers/Inbox';

const reactContainer = document.getElementById('root');

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id="react-application">
        <Route exact path="/" render={()=>(<Redirect to="/home"/>)}/>
        <Route path="/home" component={App}/>
        <Route path="/sign-up" component={UserSignUp}/>
        <Route path="/login" component={UserLogin}/>
        <Route path="/profile/:id" component={OtherUserProfile}/>
        <Route path="/myprofile" component={UserProfile}/>
        <Route path="/edit-profile" component={EditUser}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/saved-locations" component={SavedLocations}/>
        <Route path="/location" component={AnalysisPage}/>
        <Route path="/supplier-listing" component={Supplier_List}/>
        <Route path="/supplier-profile" component={Supplier_Profile}/>
        <Route path="/conversation/:id" component={Conversation}/>
        <Route path="/inbox" component={Inbox}/>
        <Route path="/request/:id" component={RequestPage}/>
        <Route path="/requests" component={listOfRequests}/>
        <Route path="/quotations" component={listOfQuotations}/>
        <Route path="/tradesdone" component={listOfTrades}/>
      </div>
    </Router>
  </Provider>,
  reactContainer
);


