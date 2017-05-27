import { loadMessages } from '../../../../Actions';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import Message from './Message';

class Messages extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.loadMessages();
  }

  render(){
    return (
      <div id="message-feed">
        <h1>List of messages</h1>
        { this.props.messages
          .filter(message => (message.Sender === Number(localStorage.id) && message.Receiver === Number(this.props.userConversed)) || (message.Sender === Number(this.props.userConversed) && message.Receiver === Number(localStorage.id)))
          .map( message => <Message message={message} key={message.id} ></Message> )
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadMessages: () => {
      dispatch(loadMessages())
    }
  }
}

const MessageFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessageFeed;