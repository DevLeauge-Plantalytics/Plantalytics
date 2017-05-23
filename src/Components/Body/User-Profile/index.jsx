import React, {Component} from 'react';

import Header from '../../Header'
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="user-profile">
        <Header/>
        <h1>User Profile</h1>
        <UserAvatar/>
        <UserInfo/>
      </div>
    )
  }
}
export default UserProfile;