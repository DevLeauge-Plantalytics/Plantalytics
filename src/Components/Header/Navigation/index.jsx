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
            <li>Option1</li>
            <li>Option2</li>
            <li>Option3</li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navigation;