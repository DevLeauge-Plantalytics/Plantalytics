import React, {Component} from 'react';
class OtherUser extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="other-user">
        <div id="other-user-profile-pic">
          <img src="other-profile-pic" alt="Other Profile"/>
        </div>
        <h2 id="convo-other">{this.props.user.username}</h2>
        <p id="convo-other-location">{this.props.user.email}</p>
      </div>
    )
  }
}
export default OtherUser;