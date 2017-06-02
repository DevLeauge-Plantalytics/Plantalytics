import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_KEY} from '../../keys';
import {connect} from 'react-redux';
import {loadUsers, getUserInfo} from '../../Actions';
import {Link} from 'react-router-dom';

class Map extends Component {

  static defaultProps = {
    center: {lat: 21.4389, lng: -157.95},
    zoom: 10
  };

  componentWillMount() {
    this.props.loadUsers();
    this.props.getUserInfo(this.props.address)
  }

  yourProfile() {
    return `/profile/${localStorage.id}`;
  }
  render() {
    const {users} = this.props;
    console.log(this.props.latitude)
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_MAP_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <Link
        to={this.yourProfile()}
        lat={this.props.latitude}
        lng={this.props.longitude}>
        <div
        id="mapUser"
        >

        </div></Link>
      {users.map(user=> (
        <div
          id="mapUserMarkers"
          lat={user.latitude}
          lng={user.longitude}
          text={user.username}
          key={user.id}
          onClick={this.theyProfile}
          >
        </div>
      ))}

      </GoogleMapReact>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  address: state.users.address,
  latitude: state.users.latitude,
  longitude: state.users.longitude
})

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers()),
  getUserInfo: address => dispatch(getUserInfo(address))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)