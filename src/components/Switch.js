import React, { useState } from 'react'
import Label from '../components/label'
import Styles from '../components/Switch.module.scss'

const Switch = props => {
  const [isOn, setIsOn] = useState(props.checked)

  const handleInputChange = e => setIsOn(!isOn)

  console.log(isOn ? 'Switched On' : 'Switched Off')
  return (
    <div className={Styles.SwitchContainer}>
      <input type="checkbox" checked={isOn} id={props.id} onChange={handleInputChange}></input>
      <label className={Styles.switch} htmlFor={props.id} title={props.title}>
        <span className={Styles.sliderContainer}>
          <span className={Styles.innerSlider}></span>
        </span>
        <Label htmlFor={props.id}>{props.children}</Label>
      </label>
    </div>
  )
}

export default Switch
