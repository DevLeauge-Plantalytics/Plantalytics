import React, {Component} from 'react';
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
        <h2 className="home-header-item">Login</h2>
        <h2 className="home-header-slash">&nbsp;/&nbsp;</h2>
        <h2 className="home-header-item">Sign-Up</h2>
      </div>
    )
  }
}
export default HomeHeader;