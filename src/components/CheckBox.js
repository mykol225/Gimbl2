import React, { useState } from 'react'
import Label from '../components/label'

const CheckBox = props => {
  const [isChecked, setInput] = useState(props.checked)

  const handleInputChange = e => setInput(!isChecked)

  return (
    <div className="Check-box" title={props.title}>
      <input type="checkbox" checked={isChecked} id={props.id} onChange={handleInputChange} />
      <Label htmlFor={props.id}>{props.children}</Label>
    </div>
  )
}

export default CheckBox
