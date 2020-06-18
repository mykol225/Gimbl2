import React from 'react'

const Label = props => {
  return (
    <div className="Label-container">
      <p className="Label-input">{props.children}</p>
    </div>
  )
}

export default Label
