import React from 'react'
import Icon32 from '../components/Icon32'
import { useState } from 'react'
import onClickOutside from 'react-onclickoutside'

const IconButton = props => {
  const [isOn, setIsOn] = useState(false)
  const toggle = () => setIsOn(!isOn)

  IconButton.handleClickOutside = () => setIsOn(false)

  console.log(isOn ? 'IconButton on' : 'IconButton off')

  return (
    <div>
      <button className={isOn ? 'IconButton on' : 'IconButton'} onClick={toggle} title="IconButton">
        <Icon32 icon={props.icon} cursor={props.cursor} />
      </button>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => IconButton.handleClickOutside,
}

export default onClickOutside(IconButton, clickOutsideConfig)
