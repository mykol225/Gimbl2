import React from 'react'
import { Link } from 'gatsby'

const ValueSimple = props => {
  return (
    <div className="ValueSimple-container">
      <input type="text" className="ValueSimple-input" placeholder={props.placeholder} />
    </div>
  )
}

export default ValueSimple
