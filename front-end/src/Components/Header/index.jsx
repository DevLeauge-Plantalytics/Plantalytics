import React, {Component} from 'react';
import Navigation from './Navigation';
import ProfilePic from './Profile-Pic';
import './styles.css';
class Header extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
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