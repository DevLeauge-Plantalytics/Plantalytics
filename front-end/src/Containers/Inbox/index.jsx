import React, {Component} from 'react';
import {connect} from 'react-redux';
import Filter from '../../Components/InboxFilter';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import Message from '../../Components/MessageInInbox';
import Header from '../../Components/Header';
import {getMessages} from '../../Actions';
import './styles.css';

class Inbox extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getMessages(localStorage.id);
  }

  yourProfile() {
    return `/profile/${localStorage.id}`;
  }

  openConversation = (event) => {
    event.preventDefault();
    this.props.openMessage()
  }

  GetUniqueMessages = (arr) => {
    return arr.reduce( (unique, msg) => {
      var senderExists = unique.filter( uMsg => uMsg.user === msg.user );
      if( senderExists.length === 0 ){
        unique.push(msg);
      }
      return unique;
    }, []);
  }

  render(){
    return (
      <div id="messagesFeed">
        <Link to={this.yourProfile()}><p className="profileLink">Profile</p></Link>
        <h1 id="inboxMessage">Inbox</h1>
        <Filter />
        <div id="inbox-feed">

        { this.GetUniqueMessages(this.props.displayMessages).map(message =>
           <Message message={message} key={message.id} openMessage={ () => this.props.history.push(`/conversation/${message.Sender}`)} />
          )
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    displayMessages: state.messages.displayMessages,
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

export default  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Inbox));