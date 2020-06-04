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
        <Icon icon={props.icon} cursor={props.cursor} />
        <input type="text" className="ValueSimple" placeholder={props.placeholder} />
      </div>
    )
  }
}

export default SimpleWIcon

//trying to get correct size and spacing for ValueMultiple

//trying to target the first value (or second child)
// but realized I cannot seem to target the icon
// and that targeting isn't working for SimpleWIcon
