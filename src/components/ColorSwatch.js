import React, { useState, useEffect, useRef } from 'react'
import { checkerPattern } from '../modules/checkerPattern'
import { rmvAlpha } from '../modules/rmvAlpha'

const ColorSwatch = props => {
  const [type, setType] = useState(props.type)
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current.getContext('2d')

    checkerPattern(canvas, 6, 6, 3, 3, '#e1e1e1')

    canvas.fillStyle = rmvAlpha(props.color, true)
    canvas.fillRect(0, 0, 8, 16)
    // swatch color

    canvas.fillStyle = rmvAlpha(props.color, false)
    canvas.fillRect(8, 0, 8, 16)
    // transparency
  }, [])

  //type selector
  switch (type) {
    case 'solid':
      console.log('solid')
      return (
        <div className="ColorSwatch">
          <canvas ref={canvasRef} width="16px" height="16px"></canvas>
        </div>
      )
      break
    case 'linearGradient':
      console.log('linearGradient')
      break
    case 'radialGradient':
      console.log('radialGradient')
      break
    case 'angularGradient':
      console.log('angularGradient')
      break
    case 'diamondGradient':
      console.log('diamondGradient')
      break
    case 'image':
      console.log('image')
      return (
        <div className="ColorSwatch">
          <p>nothing here</p>
        </div>
      )
      break
    default:
      console.log('missing swatch type')
      break
  }
}

export default ColorSwatch

// Todo later
// image swatch
// gradient swatch
//   -linear gradient
//   -radial gradient
//   -diamond gradient
//   -angular gradient
