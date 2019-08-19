import React from 'react'
import GoogleMap from 'google-map-react'

const mapStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            { "color": "#ff0000" },
            { "lightness": 4 }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            { "visibility": "on" },
            { "color": "#000000" },
            { "lightness": 0 }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            { "visibility": "off" }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 2 }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 17 },
            { "weight": 1.2 }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            { "color": "#c4c4c4" }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            { "color": "#707070" }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            { "color": "#a0300000" },
            { "lightness": 12 }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            { "color": "#800000" },
            { "lightness": 2 },
            { "visibility": "on" }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 4 }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            { "visibility": "off" },
            { "color": "#000000" },
            { "lightness": 4 }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            { "visibility": "off" }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            { "color": "#ff0000" },
            { "lightness": 6 }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 18 }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 4 }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            { "color": "#ff0000" },
            { "lightness": 6 }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            { "color": "#000000" }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 4 }
        ]
    },

    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            { "color": "#000000" }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 9 }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            { "color": "#000000" },
            { "lightness": 5 }
        ]
    },
  {}
]

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: -34.92386, // latitude for the center of the map
      lng: 138.59893 // longitude for the center of the map
    },
    zoom: 18,
    options: {
      styles: mapStyle,
      disableDefaultUI: true, // disable default map UI
      draggable: true, // make map draggable
      keyboardShortcuts: false, // disable keyboard shortcuts
      scaleControl: true, // allow scale controle
      scrollwheel: true, // allow scroll wheel
      backgroundColor: "#660000"
    }
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMap
          bootstrapURLKeys={{ key: document.URL.split('=')[1] }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.options}
        >
        </GoogleMap>
      </div>
    )
  }
}

export default Map
