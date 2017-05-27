import React, {Component} from 'react';
class MessageFeed extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="message-feed">
        <ul id="conversation-feed">
          <li className="your-message">Hey, Joe, how are your family bananas going?</li>
          <li className="other-user-message">Hey, Kanoa! They're doing alright, we'll keep you updated if anything happens.</li>
          <li className="your-message">Awesome, glad to hear it.</li>
          <li className="your-message">I'm always available to help out!</li>
          <li className="other-user-message">Thanks man, it's been a ride.</li>
        </ul>
      </div>
    )
  }
}
export default MessageFeed;