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
            <div className='button' onClick={()=>playClip(clip1)}>NAV</div>
            <div className='button' onClick={()=>playClip(clip2)}>INT</div>
            <div className='button'>REG</div>
          </div>

          <div className='row'>
            <div className='button'>LOG</div>
            <div className='button'>RND</div>
            <div className='button'>POW</div>
          </div>

        </div>
      </section>
    )
  }
}

  export default AudioComponent
