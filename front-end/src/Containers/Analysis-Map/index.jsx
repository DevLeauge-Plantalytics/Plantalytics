import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_KEY} from '../../keys'
import {connect} from 'react-redux';
import {loadUsers, getUserInfo} from '../../Actions'

class Map extends Component {

  static defaultProps = {
    center: {lat: 21.4389, lng: -158.0001},
    zoom: 10
  };

  componentWillMount() {
    this.props.loadUsers();
    this.props.getUserInfo(this.props.address)
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
      <div
        id="mapUser"
        lat={this.props.latitude}
        lng={this.props.longitude}
        >

      </div>
      {users.map(user=> (
        <div
          id="mapUserMarkers"
          lat={user.latitude}
          lng={user.longitude}
          text={user.username}
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