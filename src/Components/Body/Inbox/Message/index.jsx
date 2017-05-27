import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="inbox-message">
        <p id="created-at">CreatedAt</p>
        <h1 id="from">From</h1>
        <p id="snippet">Snippet</p>
      </div>
    )
  }
}
export default Message;