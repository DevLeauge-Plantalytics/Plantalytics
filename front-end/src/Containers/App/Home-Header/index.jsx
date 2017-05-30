import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="home-header">
        <img id="home-logo" src="https://t4.rbxcdn.com/4acfddda242f2996937cfc3ec905af85"/>
        <h1 id="logo-text">PLANTALYTICS</h1>
        <Link to="/login"><h2 className="home-header-item">Login</h2></Link>
        <h2 className="home-header-slash">&nbsp;/&nbsp;</h2>
        <Link to="/sign-up"><h2 className="home-header-item">Sign-Up</h2></Link>
      </div>
    )
  }
}
export default HomeHeader;