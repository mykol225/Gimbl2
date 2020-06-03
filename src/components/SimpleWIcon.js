import React from 'react'
import Icon from '../components/Icon'

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
        <Icon icon={props.icon} />
        <input type="text" className="ValueSimple" placeholder={props.placeholder} />
      </div>
    )
  }
}

export default SimpleWIcon
