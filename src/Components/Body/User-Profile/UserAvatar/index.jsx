import React, {Component} from 'react';
class UserAvatar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="user-avatar">
        <img id="user-profile-pic"/>
      </div>
    )
  }
}
export default UserAvatar;