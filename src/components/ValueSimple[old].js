import React from 'react'

const ValueSimple = props => {
  return (
    <div className="ValueSimple-container">
      <input type="text" className="ValueSimple-input" placeholder={props.placeholder} />
    </div>
  )
}

export default ValueSimple
