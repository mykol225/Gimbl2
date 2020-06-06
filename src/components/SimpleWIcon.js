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

//struggling with the spacing of the first
//input of .ValueMultiple
