import React, { useState } from 'react'
import Icon32 from '../components/Icon32'

const OptionButton = props => {
  const [onOff, setOnOff] = useState('off')
  const [styleOnOff, setStyleOnOff] = useState('OptionButton-container')
  const [iconSwitch, setIconSwitch] = useState()

  function toggle() {
    if (onOff == 'off') {
      setStyleOnOff('OptionButton-container on')
      setOnOff('on')
    } else {
      setStyleOnOff('OptionButton-container')
      setOnOff('off')
    }
  }

  return (
    <div className={styleOnOff} onClick={() => toggle()}>
      <Icon32 icon={props.icon} cursor={props.cursor} />
    </div>
  )
}

export default OptionButton
