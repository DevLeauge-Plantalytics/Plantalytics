import React, {Component} from 'react';
class Messages extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="user-messages">
        <h2>Messages</h2>
        <ul>
          <li>Message1</li>
          <li>Message2</li>
          <li>Message3</li>
        </ul>
      </div>
    )
  }
}
export default Messages;