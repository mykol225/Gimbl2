import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/Icon'
import ValueSimple from './ValueSimple'

const SimpleWIcon = props => {
  if (!props.icon) {
    return (
      <div className="SimpleWIcon">
        <ValueSimple placeholder={props.placeholder} />
      </div>
    )
  } else {
    return (
      <div className="SimpleWIcon">
        <Icon icon={props.icon} />
        <ValueSimple placeholder={props.placeholder} />
      </div>
    )
  }
}

export default SimpleWIcon
