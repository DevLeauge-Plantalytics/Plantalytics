import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class ProfilePic extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <Link to="/myprofile"><div id="your-prof-pic"></div></Link>
    )
  }
}
export default ProfilePic;