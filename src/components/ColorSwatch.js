import React, { useState, useEffect, useRef } from 'react'
import { checkerPattern } from '../modules/checkerPattern'
import { sepColor } from '../modules/sepColor'

const ColorSwatch = props => {
  const [type, setType] = useState(props.type)
  const canvasRef = useRef()

  console.log(sepColor('#09c4154d', true))
  // change to remove Alpha or rmvAlpha

  //type selector
  switch (type) {
    case 'solid':
      console.log('solid')
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
      break
    default:
      console.log('missing swatch type')
      break
  }

  const colorInput = props.color

  useEffect(() => {
    const canvas = canvasRef.current.getContext('2d')

    checkerPattern(canvas, 6, 6, 3, 3, '#e1e1e1')

    // canvas.fillStyle = props.color
    // canvas.fillRect(0, 0, 8, 16)
    // // swatch color

    // canvas.fillStyle = props.color
    // canvas.fillRect(8, 0, 8, 16)
    // // transparency
  }, [])

  return (
    <div className="ColorSwatch">
      <canvas ref={canvasRef} width="16px" height="16px"></canvas>
    </div>
  )
}

export default ColorSwatch

//trying to figure out how to update the render based on prop changes (becuase eventually the user can change the type)

// I have to use useEffect to get getContext('2d) to work... not sure why (useState should work right?!)

// useState will re-render a component whenever the data it holds changes
// useEffect will only run AFTER the component has rendered.

// you want your component to re-render once your prop data changes.
// you may want to use useState so that when the prop changes it re-renders the comp
