import React, { useState, useEffect } from 'react'
import onClickOutside from 'react-onclickoutside'
import Icon32 from '../components/Icon32'
import Icon8 from '../components/Icon8'
import ICONS from '../components/ICONS'

function Dropdown({ icon, titleName, items, multiSelect = false }) {
  const selectedIcon = ICONS.MENUCHECKMARKON
  const arrow = ICONS.CHEVRONDOWN8
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState([])
  const toggle = () => setOpen(!open)
  const [title, setTitle] = useState(titleName)
  Dropdown.handleClickOutside = () => setOpen(false)

  // when button clicked make that item the selected item
  function handleOnClick(item) {
    setSelection([item])
  }

  // check if this item is already slected, if so return true
  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true
    }
    return false
  }

  //check if the current item matches the current title. if so, change title to the new item.value and close the dropdown
  function handleuUpdateTitle(value) {
    if (value !== title) {
      setTitle(value)
      toggle(!open)
    } else {
    }
  }

  function isIcon(icon) {
    if (icon) {
      return <Icon32 icon={icon} />
    }
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title">
          {isIcon(icon)}
          <p>{title}</p>
          <div className="dd-header_arrow-icon">
            <Icon8 icon={arrow} />
          </div>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <Icon32 icon={isItemInSelection(item) ? selectedIcon : ''} />
                <span>
                  {item.value}
                  {isItemInSelection(item) && handleuUpdateTitle(item.value)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)
