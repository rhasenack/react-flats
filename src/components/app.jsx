import React, { Component } from 'react';
import Flat from './flat';
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
            {this.state.flatList.map((flat) => {
              return (
                <div className="col-lg-6">
                  <Flat flatInfo={flat} key={flat.name} mapFunction={this.redefineCenter} />
                </div>
              );
            })
            }
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
