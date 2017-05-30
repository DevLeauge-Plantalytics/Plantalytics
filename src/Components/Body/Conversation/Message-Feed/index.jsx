import { loadConversation } from '../../../../Actions';
import { connect } from 'react-redux';
import React, {Component} from 'react';
import Message from './Message';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }

  componentWillMount(){
    this.props.loadConversation(Number(this.props.userConversed));
  }

  render(){
    return (
      <div id="message-feed">
        { this.props.messages
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
    loadConversation: (id) => {
      dispatch(loadConversation(id))
    }
  }
}

const MessageFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessageFeed;