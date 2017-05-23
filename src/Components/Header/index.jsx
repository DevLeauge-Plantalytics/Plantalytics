import React, {Component} from 'react';
import Navigation from './Navigation';
import ProfilePic from './Profile-Pic';
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="header">
        <Navigation/>
        <ProfilePic/>
      </div>
    )
  }
}
export default Header;