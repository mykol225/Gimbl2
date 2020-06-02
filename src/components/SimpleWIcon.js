import React from 'react'
import Icon from '../components/Icon'

const SimpleWIcon = props => {
  if (!props.icon) {
    return (
      <div className="SimpleWIcon">
        <input type="text" className="ValueSimple" placeholder="empty" />
      </div>
    )
  } else {
    return (
      <div className="SimpleWIcon">
        <Icon icon={props.icon} />
        <input type="text" className="ValueSimple" placeholder="empty" />
      </div>
    )
  }
}

export default SimpleWIcon
