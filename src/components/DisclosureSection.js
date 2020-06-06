import React from 'react'
import Icon16 from '../components/Icon16'

const DisclosureSection = props => {
  if (!props.icon || props.icon === 'none') {
    return (
      <div className="Disclosure-container">
        <p className="DisclosureSection-p">{props.name}</p>
      </div>
    )
  } else {
    return (
      <div className="Disclosure-container">
        <Icon16 icon={props.icon} />
        <p className="DisclosureSection-p">{props.name}</p>
      </div>
    )
  }
}

export default DisclosureSection
