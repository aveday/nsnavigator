import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} from 'react-google-maps'

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
    }
]


const mapProps = {
  defaultZoom: 18,
  defaultCenter: {
    lat: -34.92386, // latitude for the center of the map
    lng: 138.59893 // longitude for the center of the map
  },
  defaultOptions: {
    disableDefaultUI: true, // disable default map UI
    draggable: true, // make map draggable
    keyboardShortcuts: false, // disable keyboard shortcuts
    scaleControl: true, // allow scale controle
    scrollwheel: true, // allow scroll wheel
    styles: mapStyle, // change default map styles
    backgroundColor: "#ff0000"
  }
}

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap {...mapProps}/>
  ))
)

export default MapComponent 

