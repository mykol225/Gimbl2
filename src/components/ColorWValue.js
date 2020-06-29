import React, { useState } from 'react'
import ValueSimple from '../components/ValueSimple'
import ColorSwatch from '../components/ColorSwatch'

const ColorWValue = props => {
  return (
    <div className="ColorWValue">
      <ColorSwatch type="solid" color="rgba(255, 200, 35, 0.6)" />
      <ValueSimple value={props.firstValue} placeholder={props.firstPlaceholder} />
      <ValueSimple value={props.secondValue} placeholder={props.secondPlaceholder} />
    </div>
  )
}

export default ColorWValue
