import React from 'react'
import Icon32 from '../components/Icon32'
import { useState } from 'react'
import onClickOutside from 'react-onclickoutside'
import styled from 'styled-components'

const IconButtonStyled = styled.button``

const IconButton = props => {
  const [isOn, setIsOn] = useState(false)
  const toggle = () => setIsOn(!isOn)

  IconButton.handleClickOutside = () => setIsOn(false)

  return (
    <button className={isOn ? 'IconButton on' : 'IconButton'} onClick={toggle} title="IconButton">
      <Icon32 icon={props.icon} cursor={props.cursor} />
    </button>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => IconButton.handleClickOutside,
}

export default onClickOutside(IconButton, clickOutsideConfig)
