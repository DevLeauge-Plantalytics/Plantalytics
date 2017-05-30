import { combineReducers } from 'redux';
import users from './users';
import messages from './messages';
import D3 from './D3';

const reducers = combineReducers({
  users, messages, D3
});

export default reducers;