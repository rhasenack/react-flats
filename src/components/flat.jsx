import React, { Component } from 'react';


class Flat extends Component {

  changeMapOnClick = () => {
    this.props.mapFunction(this.props.flatInfo.lat, this.props.flatInfo.lng)
  }

  render() {
    return (
      <div className="card"  onClick={this.changeMapOnClick}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flatInfo.imageUrl})`}}>
        <div className="card-category">{this.props.flatInfo.price} {this.props.flatInfo.priceCurrency} </div>
        <div className="card-description">
          <h2>{this.props.flatInfo.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
