import React, {Component} from 'react';
class ProfilePic extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="your-prof-pic">
        <img src="your-profile-pic"/>
      </div>
    )
  }
}
export default ProfilePic;