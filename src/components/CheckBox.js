import React, { useState } from 'react'
import Label from '../components/label'
import Styles from '../components/CheckBox.module.scss'

const CheckBox = props => {
  const [isChecked, setInput] = useState(props.checked)

  const handleInputChange = e => setInput(!isChecked)

  console.log(isChecked ? 'Checkbox checked' : 'Checkbox not checked')
  return (
    <div className={Styles.CheckBox} title={props.title}>
      <input type="checkbox" checked={isChecked} id={props.id} onChange={handleInputChange} />
      <Label htmlFor={props.id}>{props.children}</Label>
    </div>
  )
}

export default CheckBox
