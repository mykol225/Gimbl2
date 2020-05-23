import React from 'react'
import { Link } from 'gatsby'

const Label = props => {
  return (
    <div className="Label-container">
      <p className="Label-input">{props.labelName}</p>
    </div>
  )
}

export default Label
