import React, {Component} from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }

  render(){
    return (
        <div id="main-nav-items">
        {localStorage.loggedIn &&
          <div>
            <p className="header-nav-item">Download the App</p>
            <p className="header-nav-item">Become a Supplier</p>
          </div>
        }
        </div>
    )
  }
}

export default Navigation;