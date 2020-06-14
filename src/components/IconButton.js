import React from 'react'
import Icon32 from '../components/Icon32'

const IconButton = props => {
  return (
    <div className="IconButton-container">
      <Icon32 icon={props.icon} cursor={props.cursor} />
    </div>
  )
}

export default IconButton
