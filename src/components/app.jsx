import React, { Component } from 'react';
import FlatList from './flat_list';
import Map from './map'
import flats from '../data/flats';


class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      flatList: flats,
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      }
    };
  }

  redefineCenter = (latitude, longitude) => {
    this.setState({
      center: {
        lat: latitude,
        lng: longitude
      }
    });
  }

  render() {
    return (
      <div className="flex">
        <div className="left">
          <div className="row">
            <FlatList flatList={this.state.flatList} mapFunction={this.redefineCenter} />
          </div>
        </div>
        <div className="right">
          <Map center={ this.state.center }/>
        </div>
      </div>
    );
  }
}

export default App;
