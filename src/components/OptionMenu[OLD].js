import React, { useState } from 'react'
import Icon32 from './Icon32'
import Icon8 from './Icon8'
import ICONS from '../components/ICONS'

const OptionMenu = props => {
  const selectedIcon = ICONS.MENUCHECKMARKON
  const arrow = ICONS.CHEVRONDOWN8
  const list = props.list
  const selectedItem = null

  const visible = {
    visibility: 'hidden',
    opacity: 0,
  }
  const hidden = {
    visibility: 'visible',
    opacity: 1,
  }
  const [isOpen, setIsOpen] = useState(true)
  const toggleMenu = () => setIsOpen(!isOpen)

  const optionNotSelected = 'OptionMenu-option'
  const optionSelected = 'OptionMenu-option selected'

  const [isSelected, setSelected] = useState(true)
  const selected = () => {
    console.log('selected')
    setSelected(!isSelected)
  }

  const menuItems = list.map(function (element, i) {
    return (
      <span
        key={i}
        className={isSelected ? optionSelected : optionNotSelected}
        datavalue={element}
        onClick={selected}
        selected={false}
      >
        <Icon32 icon={isSelected ? selectedIcon : ''} />
        {element}
      </span>
    )
  })

  return (
    <div className="OptionMenu-wrapper">
      <div className="OptionMenu">
        <div className="OptionMenu-trigger" onClick={toggleMenu}>
          <Icon32 icon={props.icon} />
          <span>Pass through</span>
          <Icon8 icon={arrow} className="OptionMenu-arrow" />
        </div>
        <div className="OptionMenu-options" style={isOpen ? visible : hidden}>
          {menuItems}
        </div>
      </div>
    </div>
  )
}

export default OptionMenu
