import React, {Component} from 'react';
import MessageFeed from './Message-Feed';
import OtherUser from './Other-Prof';
import SendMessageForm from './Send-Message';
import Header from '../../Header';
import UserNav from '../User-Profile/User-Nav';
import './styles.css';
class Conversation extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div>
        <Header/>
        <UserNav/>
        <div id="conversation">
          <OtherUser/>
          <MessageFeed userConversed={this.props.match.params.id}/>
          <SendMessageForm userConversed={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}
export default Conversation;