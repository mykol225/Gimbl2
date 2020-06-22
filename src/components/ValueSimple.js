import React, { useState } from 'react'
import Styles from './ValueSimple.module.scss'

const ValueSimple = props => {
  const [value, setValue] = useState(props.value)

  function handleNameChange(event) {
    setValue(event.target.value)
  }
  return (
    <div>
      <input
        type="text"
        className={Styles.ValueSimple}
        placeholder={props.placeholder}
        value={value}
        onChange={handleNameChange}
        title="ValueSimple"
      />
    </div>
  )
}

export default ValueSimple
