import React, { useRef, useEffect } from 'react'
import Styles from '../components/ColorSwatch.module.scss'

const ColorSwatch = props => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current.getContext('2d')
    canvas.fillStyle = '#5DECB0'
    canvas.fillRect(0, 0, 16, 16)
  })

  return (
    <div className={Styles.Swatch}>
      <canvas ref={canvasRef} width="16px" height="16px"></canvas>
    </div>
  )
}

export default ColorSwatch
