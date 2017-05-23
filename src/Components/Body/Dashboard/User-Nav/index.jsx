import React, {Component} from 'react';
class UserNav extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="user-nav">
        <ul>
          <li>Dashboard</li>
          <li>Messages</li>
          <li>Posts</li>
          <li>Your Locations</li>
        </ul>
      </div>
    )
  }
}
export default UserNav;