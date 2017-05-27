import React, {Component} from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }

  render(){
    return (
      <div id="user-info">
        <h2>Username</h2>
        <h3>FirstName LastName</h3>
        <h4>Address</h4>
        <h4>Zipcode</h4>
        <button type="edit-profile">Edit Profile</button>
      </div>
    )
  }
}
export default UserInfo;