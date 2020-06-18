import React, { useState } from 'react'
import Icon32 from '../components/Icon32'

const OptionButton = props => {
  const [isOn, setIsOn] = useState(false)
  const toggle = () => setIsOn(!isOn)

  console.log(isOn ? 'Option on' : 'Option off')

  return (
    <div
      className={isOn ? 'OptionButton on' : 'OptionButton'}
      onClick={toggle}
      title="OptionButton"
    >
      <Icon32 icon={props.icon} cursor={props.cursor} />
    </div>
  )
}

export default OptionButton
