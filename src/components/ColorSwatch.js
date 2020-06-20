import React, { useRef, useEffect } from 'react'

const ColorSwatch = props => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current.getContext('2d')
    canvas.fillStyle = 'yellow'
    canvas.fillRect(0, 0, 16, 16)
  })

  return (
    <div className="Swatch">
      <canvas ref={canvasRef} width="16px" height="16px"></canvas>
    </div>
  )
}

export default ColorSwatch
