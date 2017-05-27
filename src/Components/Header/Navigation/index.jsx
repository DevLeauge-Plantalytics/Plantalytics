import React, {Component} from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <ul id="main-nav-items">
          <li className="header-nav-item">Download the App</li>
          <li className="header-nav-item">Become a Supplier</li>
        </ul>
    )
  }
}

export default Navigation;