import { sendMessage } from '../../../../Actions';
import { connect } from 'react-redux';
import React, {Component} from 'react';

class SendMessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body:"",
      Sender:Number(localStorage.id),
      Receiver:Number(this.props.userConversed),
    };

    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state);
    this.reset();
  }

  reset(){
    this.setState({
      body: ""
    })
  }

  handleBodyChange(event) {
    this.setState({ body : event.target.value });
  }

  render(){
    return (
      <div id="compose-message">
        <input id="message-body" type="text" placeholder="enter your message" onChange={this.handleBodyChange} value={this.state.body} />
        <button id="send-message" onClick={this.handleSubmit} type="submit">Send</button>
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
    sendMessage: (body) => {
      dispatch(sendMessage(body))
    }
  }
}

const SendMessageConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMessageForm);

export default SendMessageConnected;