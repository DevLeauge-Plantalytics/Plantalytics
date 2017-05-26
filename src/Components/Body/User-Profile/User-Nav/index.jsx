import React, {Component} from 'react';
class UserNav extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="user-nav">
        <ul id="user-nav-items">
          <li className="user-nav-item">Dashboard</li>
          <li className="user-nav-item">Saved Locations</li>
          <li className="user-nav-item">Requests</li>
          <li className="user-nav-item">Messages</li>
        </ul>
      </div>
    )
  }
}
export default UserNav;