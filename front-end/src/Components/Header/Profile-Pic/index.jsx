import React, {Component} from 'react';
class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="your-prof-pic">
        <img src="prof-pic" alt="Pro-Pic"/>
      </div>
    )
  }
}
export default ProfilePic;