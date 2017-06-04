import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../Components/Header'
import UserAvatar from '../../Components/UserAvatar';
import TheirUserInfo from '../../Components/TheirUserInfo';
import UserNav from '../../Components/UserNav';
import {getUserById} from '../../API';
import {getUser} from '../../Actions';
import ReqButton from '../../Components/ReqButton';
import './styles.css';

class OtherUserProfile extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  componentWillMount() {
    localStorage.reqId = window.location.pathname.slice(9);
    if (localStorage.reqId != localStorage.id){
      this.props.getUser(localStorage.reqId);
    }
  }

  render(){
    if (localStorage.reqId != localStorage.id){
      return (
        <div id="other-user-profile">
          <Header/>
          <UserNav/>
          <div id="analysis-map">
            <ReqButton user={this.props.singleUser}/>
          </div>
          <UserAvatar user={this.props.singleUser}/>
          <TheirUserInfo user={this.props.singleUser}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    singleUser: state.users.singleUser
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id))
    }
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(OtherUserProfile);

export default ConnectedProfile;