import React from 'react'
import Label from '../components/label'
import { useState } from 'react'

const CheckBox = props => {
  const [isChecked, setInput] = useState(props.checked)

  const handleInputChange = e => setInput(!isChecked)

  console.log(isChecked ? 'Checked' : 'not checked')
  return (
    <div className="Check-box" title={props.title}>
      <input type="checkbox" checked={isChecked} id={props.id} onChange={handleInputChange} />
      <Label htmlFor={props.id}>{props.children}</Label>
    </div>
  )
}

export default CheckBox
