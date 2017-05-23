import React, {Component} from 'react';
class MessageFeed extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="message-feed">
        <ul>
        <li>
          <img src="other-profile-pic"/>
          <p>Message1</p>
        </li>
        <li>
          <img src="your-profile-pic"/>
          <p>Message2</p>
        </li>
        <li>
          <img src="other-profile-pic"/>
          <p>Message3</p>
        </li>
        </ul>
      </div>
    )
  }
}
export default MessageFeed;