import { combineReducers } from 'redux';
import users from './users';
import messages from './messages';
import locations from './locations';

const reducers = combineReducers({
  users, messages, locations
});

export default reducers;