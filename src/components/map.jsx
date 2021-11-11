import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

class Map extends Component {

  render() {
    const defaultCenter = {
      lat:10,
      lng:10
    }

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA4pZlhCteWdP_CS0zgmUG8YuFsxPsm9bk" }}
          defaultCenter={defaultCenter}
          center={this.props.center}
          defaultZoom={16}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={this.props.center.lat}
            lng={this.props.center.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
