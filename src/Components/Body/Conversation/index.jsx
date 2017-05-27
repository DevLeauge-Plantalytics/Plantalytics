import React, {Component} from 'react';
import MessageFeed from './Message-Feed';
import OtherUser from './Other-Prof';
import SendMessage from './Send-Message';
import Header from '../../Header';
import UserNav from '../User-Profile/User-Nav';
import './styles.css';
class Conversation extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <Header/>
        <UserNav/>
        <div id="conversation">
          <OtherUser/>
          <MessageFeed/>
          <SendMessage/>
        </div>
      </div>
    )
  }
}
export default Conversation;