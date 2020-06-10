import React, { useState } from 'react'
import ValueSimple from '../components/ValueSimple'
import Icon32 from '../components/Icon32'

const SimpleWIcon = props => {
  const [value, setValue] = useState(props.value)

  function handleNameChange(event) {
    setValue(event.target.value)
  }

  if (!props.icon) {
    return (
      <div className="SimpleWIcon">
        <ValueSimple value={props.value} placeholder={props.placeholder} />
      </div>
    )
  } else {
    return (
      <div className="SimpleWIcon">
        <Icon32 icon={props.icon} cursor={props.cursor} />
        <ValueSimple value={props.value} placeholder={props.placeholder} />
      </div>
    )
  }
}

export default SimpleWIcon
