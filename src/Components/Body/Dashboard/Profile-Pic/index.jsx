import React, {Component} from 'react';
class ProfilePic extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="user-profile-pic">
        <img src="profile-pic"/>
      </div>
    )
  }
}
export default ProfilePic;