import React, {Component} from 'react';
import {connect} from 'react-redux';
import Filter from '../../Components/InboxFilter';
import Message from '../../Components/MessageInInbox';
import Header from '../../Components/Header';
import {getMessages} from '../../Actions';

class Inbox extends Component {

  componentWillMount() {
    this.props.getMessages(localStorage.id);
  }

  openMessage = (event) => {
    event.preventDefault();
    this.props.openMessage()
  }

  render(){
    return (
      <div id="messagesFeed">
        <Header/>
        <h1>Inbox</h1>
        <Filter id="filter" messages={this.props.inboxMessages}/>
        <div id="inbox-feed">
          { this.props.inboxMessages
            .map(message => <Message message={message} key={message.id}/> )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    inboxMessages: state.messages.inboxMessages,
    user_id: state.users.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   getMessages: (user_id) => {
      dispatch(getMessages(user_id))
    }
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);