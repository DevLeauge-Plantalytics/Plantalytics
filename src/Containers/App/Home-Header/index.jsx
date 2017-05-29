import React, {Component} from 'react';
class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="home-header">
        <h2 className="home-header-item">Login</h2>
        <h2 className="home-header-slash">&nbsp;/&nbsp;</h2>
        <h2 className="home-header-item">Sign-Up</h2>
      </div>
    )
  }
}
export default HomeHeader;