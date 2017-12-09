import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      canter: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    return (
      <div id="map" />
    )
  }
}