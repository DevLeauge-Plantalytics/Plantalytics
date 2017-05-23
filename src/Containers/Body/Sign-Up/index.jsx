import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignUpForm from './Sign-Up-Form';
import SocialSignUp from './Social-Sign-Up';
import {postUser} from '../../../API';
import {addUser} from '../../../Actions';
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }
  addUser(user){
    postUser(JSON.stringify(user))
    .then(user => {
      this.props.addUser(user);
    });
  }
  render(){
    return (
      <div id="sign-up">
        <SocialSignUp/>
        <SignUpForm addUser={this.addUser}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    plants: state.plants
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUser: user => {
      dispatch(addUser(user))
    }
  }
}

const ConnectedSignUp = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default ConnectedSignUp;