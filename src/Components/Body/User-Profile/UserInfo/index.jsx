import React, {Component} from 'react';

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="user-info">
        <h3>Username</h3>
        <h3>FirstName</h3>
        <h3>LastName</h3>
        <h3>Address</h3>
        <h3>Zipcode</h3>
        <button type="edit-profile">Edit Profile</button>
      </div>
    )
  }
}
export default UserInfo;