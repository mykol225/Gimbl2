import React, { useState } from 'react'

const ValueSimple = props => {
  const [value, setValue] = useState(props.value)

  function handleNameChange(event) {
    setValue(event.target.value)
  }
  return (
    <div className="ValueSimple-container">
      <input
        type="text"
        className="ValueSimple"
        placeholder={props.placeholder}
        value={value}
        onChange={handleNameChange}
      />
    </div>
  )
}

export default ValueSimple
