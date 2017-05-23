import React, {Component} from 'react';
import MessageFeed from './Message-Feed';
import OtherUser from './Other-Prof';
import SendMessage from './Send-Message';
import Header from '../Header/index';
class Conversation extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="conversation">
        <Header/>
        <h2>Conversation with User Name</h2>
        <OtherUser/>
        <SendMessage/>
        <MessageFeed/>
      </div>
    )
  }
}
export default Conversation;