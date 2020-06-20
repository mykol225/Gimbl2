import React, { useRef, useEffect } from 'react'
import Styles from '../components/ColorSlider.module.scss'

const ColorSlider = props => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current.getContext('2d')
    if (props.type === 'hue') {
      const gradient = canvas.createLinearGradient(0, 0, 168, 0)
      gradient.addColorStop(0, 'hsl(0, 100%, 50%)')
      gradient.addColorStop(0.16, 'hsl(60, 100%, 50%)')
      gradient.addColorStop(0.33, 'hsl(120, 100%, 50%)')
      gradient.addColorStop(0.5, 'hsl(180, 100%, 50%)')
      gradient.addColorStop(0.66, 'hsl(240, 100%, 50%)')
      gradient.addColorStop(0.83, 'hsl(300, 100%, 50%)')
      gradient.addColorStop(1, 'hsl(360, 100%, 50%)')

      canvas.fillStyle = gradient
      canvas.fillRect(0, 0, 168, 12)
    } else {
      canvas.fillStyle = '#e1e1e1'
      const rows = 4
      const columns = 28
      const w = 3
      const h = 3
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
          console.log(i % 2 ? 'even' : 'odd')
          canvas.fillRect(i % 2 ? j * 6 + 3 : j * 6, i * h, w, h)
          // for every iteration x=j * two widths(6px)
          // if the row(i) is even shift x over by 3px
        }
      }
      const gradient = canvas.createLinearGradient(0, 0, 168, 0)
      gradient.addColorStop(0, 'rgb(80%, 80%, 80%, 0%)')
      gradient.addColorStop(1, 'rgb(80%, 80%, 80%, 100%)')
      canvas.fillStyle = gradient
      canvas.fillRect(0, 0, 168, 12)
    }
  }, [])

  return (
    <div className={Styles.container}>
      <canvas ref={canvasRef} width="168px" height="12px"></canvas>
      <input type="range" min="1" max="100" id="myRange" />
      <div className={Styles.innerShadow}></div>
    </div>
  )
}

export default ColorSlider
