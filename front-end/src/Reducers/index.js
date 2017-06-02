import { combineReducers } from 'redux';
import users from './users';
import messages from './messages';
import D3 from './D3';
import products from './products';
import requests from './requests';
import quotations from './quotations';

const reducers = combineReducers({
  users, messages, D3, products, requests, quotations
});

export default reducers;