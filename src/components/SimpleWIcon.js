import React from 'react'
import Icon from '../components/Icon'

const SimpleWIcon = props => {
  if (!props.icon) {
    return (
      <div className="SimpleWIcon">
        <div className="ValueSimple-container">
          <input type="text" className="ValueSimple-input" placeholder={props.placeholder} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="SimpleWIcon">
        <Icon icon={props.icon} />
        <div className="ValueSimple-container">
          <input type="text" className="ValueSimple-input" placeholder={props.placeholder} />
        </div>
      </div>
    )
  }
}

export default SimpleWIcon
