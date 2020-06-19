import React, { useState } from 'react'
import Label from '../components/label'

const Switch = props => {
  const [isOn, setIsOn] = useState(props.checked)

  const handleInputChange = e => setIsOn(!isOn)

  console.log(isOn ? 'Switched On' : 'Switched Off')
  return (
    <div className="Switch-container">
      <input type="checkbox" checked={isOn} id={props.id} onChange={handleInputChange}></input>
      <label className="switch" htmlFor={props.id} title={props.title}>
        <span className="slider-container">
          <span className="inner-slider"></span>
        </span>
        <Label htmlFor={props.id}>{props.children}</Label>
      </label>
    </div>
  )
}

export default Switch

// trying to recreate this: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch
// using Label component as label to checkbox

// essentially you put a span (rounded corners) over the checkbox that is the circle
// to keep the clickable state nature
// then you use :before and :after to transform translateX
// from one position to the other and change color
