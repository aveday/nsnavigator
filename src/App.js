import React from 'react'
import './App.css'
import Map from './map.js'
import AudioComponent from './audio.js'

export default () => (
  <main className="App" >
    <section id="map">
      <Map />
    </section>
    <AudioComponent />
  </main>
)

