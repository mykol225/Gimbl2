import React from 'react'
import Icon16 from '../components/Icon16'

const Disclosure = props => {
  if (!props.icon || props.icon === 'none') {
    return (
      <div className="Disclosure-container">
        <p className="Disclosure-p">{props.children}</p>
      </div>
    )
  } else {
    return (
      <div className="Disclosure-container">
        <Icon16 icon={props.icon} />
        <p className="Disclosure-p">{props.children}</p>
      </div>
    )
  }
}

export default Disclosure
