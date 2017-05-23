import React, {Component} from 'react';

class SendMessage extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="compose-message">
        <input id="message-body" type="text"/>
        <button id="send-message">Send</button>
      </div>
    )
  }
}
export default SendMessage;