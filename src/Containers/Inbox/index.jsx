import React, {Component} from 'react';
import {connect} from 'react-redux';
import Filter from '../../Components/InboxFilter';
import Message from '../../Components/MessageInInbox';
import Header from '../../Components/Header';
//import {getMessages} from '../../Actions';

class Inbox extends Component {

  componentWillMount() {
    this.props.getMessages(this.props.user_id);
  }

  openMessage = (event) => {
    event.preventDefault();
    this.props.openMessage()
  }

  render(){
    return (
      <div id="inbox">
        <Header/>
        <h1>Inbox</h1>
        <Filter id="filter" messages={this.props.messages}/>
        <div id="inbox-feed">
          {this.props.message.map(message => (
            <a onClick={this.openMessage}>
              <Message message={message}/>
            </a>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages.messages,
    user_id: state.users.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   /* getMessages: (user_id) => {
      dispatch(getMessages(user_id))
    }*/
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox);