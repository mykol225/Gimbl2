import React, { useRef, useEffect } from 'react'
import { checkerPattern } from '../modules/checkerPattern'

const ColorSlider = props => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current.getContext('2d')

    if (props.type === 'hue') {
      //hue slider
      const gradient = canvas.createLinearGradient(0, 0, 168, 0)
      for (let i = 0; i < 7; i++) {
        const element = gradient.addColorStop(i * 0.1666, `hsl(${i * 60}, 100%, 50%)`)
      }
      canvas.fillStyle = gradient
      canvas.fillRect(0, 0, 168, 12)
    } else {
      checkerPattern(canvas, 4, 28, 3, 3, '#e1e1e1')
      // gray gradient
      const gradient = canvas.createLinearGradient(0, 0, 168, 0) //gray scale gradient
      gradient.addColorStop(0, 'rgb(80%, 80%, 80%, 0%)')
      gradient.addColorStop(1, 'rgb(80%, 80%, 80%, 100%)')
      canvas.fillStyle = gradient
      canvas.fillRect(0, 0, 168, 12)
    }
  }, [])

  return (
    <div className="CS-container">
      <canvas ref={canvasRef} width="168px" height="12px"></canvas>
      <input type="range" min="1" max="100" id="myRange" />
      <div className="innerShadow"></div>
    </div>
  )
}

export default ColorSlider
