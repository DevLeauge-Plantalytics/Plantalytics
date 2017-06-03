import React, {Component} from 'react';
import { connect } from 'react-redux';
import MessageFeed from './Message-Feed';
import OtherUser from './Other-Prof';
import SendMessageForm from './Send-Message';
import Header from '../../Header';
import UserNav from '../../UserNav';
import {getUser} from '../../../Actions';
import './styles.css';

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }

  componentWillMount(){
    this.props.getUser(this.props.match.params.id);
  }

  render(){
    return (
      <div>
        <Header/>
        <UserNav/>
        <div id="conversation">
          <OtherUser user={this.props.user}/>
          <MessageFeed userConversed={this.props.match.params.id} />
          <SendMessageForm userConversed={this.props.match.params.id}/>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users.singleUser
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: (id) => {
      dispatch(getUser(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);