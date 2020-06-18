import React from 'react'

const Label = props => {
  return (
    <div className="Label-container">
      <label className="Label-content" htmlFor={props.htmlFor}>
        {props.children}
      </label>
    </div>
  )
}

export default Label
