import React, { Component } from 'react';
import Flat from './flat';


class FlatList extends Component {

  render() {
    return (
      this.props.flatList.map((flat) => {
        return (
          <div className="col-lg-6">
            <Flat flatInfo={flat} key={flat.name} mapFunction={this.props.mapFunction} />
          </div>
        );
      })
    );
  }
}

export default FlatList;
