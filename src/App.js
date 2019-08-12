import React from 'react'
import './App.css'
import MapComponent from './map.js'
import AudioComponent from './audio.js'
const mapsKey = document.URL.split('=')[1]

export default () => (
  <main className="App" >
    <section id="map">
      <MapComponent
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing&key=" + mapsKey}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </section>
    <AudioComponent />
  </main>
)

