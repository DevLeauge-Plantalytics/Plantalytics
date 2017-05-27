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
        <h2 id="convo-other">Other UserName</h2>
        <p id="convo-other-location">City Name, 21PC0D3</p>
      </div>
    )
  }
}
export default OtherUser;