import React from 'react'
import Icon32 from '../components/Icon32'

const SimpleWIcon = props => {
  if (!props.icon || props.icon === 'none') {
    return (
      <div className="SimpleWIcon">
        <input type="text" className="ValueSimple" placeholder={props.placeholder} />
      </div>
    )
  } else {
    return (
      <div className="SimpleWIcon">
        <Icon32 icon={props.icon} cursor={props.cursor} />
        <input type="text" className="ValueSimple" placeholder={props.placeholder} />
      </div>
    )
  }
}

export default SimpleWIcon
