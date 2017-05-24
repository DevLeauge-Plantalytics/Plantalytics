import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../Header'
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import {getUser} from '../../../Actions'

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }

  render(){
    return (
      <div id="user-profile">
        <Header/>
        <h1>User Profile</h1>
        <UserAvatar/>
        <UserInfo/>
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
    getUser: user => {
      dispatch(getUser(user))
    }
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default ConnectedProfile;