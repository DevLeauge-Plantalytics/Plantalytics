import React, {Component} from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="main-nav">
        <nav>
          <ul>
            <li>Download the App</li>
            <li>Become a Supplier</li>
            <li>Login / SignUp </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation;