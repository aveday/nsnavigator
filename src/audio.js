import React from 'react'
import Oscilloscope from 'oscilloscope'
import clip1 from './welcomeback.mp3'
import clip2 from './traffic.mp3'

const clips = [ clip1, clip2 ]
let clipIndex = 0

const audioElement = new Audio()
const audioContext = new window.AudioContext()
const source = audioContext.createMediaElementSource(audioElement)
const scope = new Oscilloscope(source)
source.connect(audioContext.destination)


window.onresize = () => {
  const canvas = document.querySelector('canvas')
  canvas.width = document.body.clientWidth / 3;
  canvas.height = document.body.clientHeight / 3;
  const ctx = canvas.getContext("2d")
  ctx.strokeStyle = 'red'
  ctx.lineWidth = '2'
  scope.draw(ctx)
}

const playClip = clip => {
  console.log('playing...')
  audioElement.src = clip
  audioElement.play()

  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext("2d")
  scope.stop(ctx)
  scope.animate(ctx)
}

const queueClip = (clip, timeout) => {
  return () => window.setTimeout(() => playClip(clip), timeout)
}

class AudioComponent extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector('canvas')
    canvas.width = document.body.clientWidth / 3;
    canvas.height = document.body.clientHeight / 3;

    const ctx = canvas.getContext("2d")
    ctx.strokeStyle = 'red'
    ctx.lineWidth = '2'
    scope.draw(ctx)
    console.log('mount')

    document.onkeypress = target => {
      playClip(clips[clipIndex])
      clipIndex = (clipIndex + 1) % 2
    }
  }

  render() {
    return (
      <section id='audio'>
        <canvas>
        </canvas>

        <div className='buttons'>
          <div className='row'>
            <div className='button' onClick={queueClip(clip1, 1000)}>C1D1</div>
            <div className='button' onClick={queueClip(clip1, 3000)}>C1D3</div>
            <div className='button' onClick={queueClip(clip1, 5000)}>C1D5</div>
          </div>

          <div className='row'>
            <div className='button' onClick={queueClip(clip2, 1000)}>C2D1</div>
            <div className='button' onClick={queueClip(clip2, 3000)}>C2D3</div>
            <div className='button' onClick={queueClip(clip2, 5000)}>C2D5</div>
          </div>

        </div>
        <br/>
        <p className='version'>navigator v1.86.32</p>
        <br/>
        <div id='graphic'>
        </div>
      </section>
    )
  }
}

  export default AudioComponent
