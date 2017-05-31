import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_KEY} from '../../keys'


class Map extends Component {
  static defaultProps = {
    center: {lat: 21.3087, lng: -157.8085},
    zoom: 11
  };

  render() {
    return (
        <GoogleMapReact
          bootstrapURLKeys={{key: GOOGLE_MAP_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
    );
  }
}

export default Map;