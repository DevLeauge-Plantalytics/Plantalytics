import React, {Component} from 'react';
import { connect } from 'react-redux';

import LocationCrops from '../../Components/ViewCropsButton';
import MessageFeed from '../../Containers/MessageFeed';
import Newsfeed from '../../Containers/Newsfeed';
import SettingsButton from '../../Components/SettingsButton';
import UserAvatar from '../../Components/UserAvatar';
import UserNav from '../../Components/UserNav';
import Header from '../../Components/Header';
import {getUser} from '../../Actions';
import './styles.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }
  getUser(user){
    this.props.getUser(user);
  }

  render(){
    return (
      <div id="dashboard">
        <Header/>
        <UserNav/>
        <UserAvatar/>
        <SettingsButton/>
        <LocationCrops/>
        <Newsfeed/>
        <MessageFeed/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id))
    }
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default ConnectedDashboard;
