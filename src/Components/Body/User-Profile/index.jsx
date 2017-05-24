import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../Header'
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import {getUserById} from '../../../API'
import {getUser} from '../../../Actions'

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    getUserById()
    .then(user => {
      getUser(user);
    });
  }

  render(){
    console.error(this.props);
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
    users: state.users
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