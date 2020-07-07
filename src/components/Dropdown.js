import React, { useState, useEffect } from 'react'
import onClickOutside from 'react-onclickoutside'
import Icon32 from '../components/Icon32'
import Icon8 from '../components/Icon8'
import ICONS from '../components/ICONS'
import styled from 'styled-components'
import { Color, Font, Spacing, Effect } from '../modules/designTokens'

const Wrapper = styled.div`
  user-select: none;
  position: relative;
`
const Header = styled.div`
  font-size: ${Font.ui11.size};
  font-style: ${Font.ui11.style};
  font-weight: ${Font.ui11.weight.normal};
  line-height: ${Font.ui11.lineHeight};
  letter-spacing: ${Font.ui11.letterSpacing};

  &:hover {
    border-radius: 3px;
    box-shadow: inset 0px 0px 0px 1px ${Color.white}, inset 0px 0px 0px 2px ${Color.black1};
    .Icon8 {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translate(-50%, -50%);
      path {
        fill: ${Color.fgHighPriority};
      }
    }
  }
  &:active,
  &:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px ${Color.white}, inset 0px 0px 0px 3px ${Color.primaryAccent};
    .Icon8 {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translate(-50%, -50%);
      path {
        fill: ${Color.fgHighPriority};
      }
    }
  }
`

const HeaderTitle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${Spacing.medium};
  p {
    padding: ${Spacing.base} ${Spacing.tiny} ${Spacing.base} ${Spacing.base};
  }
  .Icon32 {
    margin-right: -${Spacing.base};
    path {
      fill: ${Color.fgNormal};
    }
  }
`
const HeaderArrow = styled.div`
  .Icon8 {
    position: relative;
    path {
      fill: ${Color.fgLowPriority};
    }
  }
  user-select: none;
`
const List = styled.ul`
  left: 0;
  right: 0;
  list-style-type: none;
  padding: ${Spacing.base} 0px;
  background-color: ${Color.hud};
  filter: ${Effect.hudShadow};
  border-radius: 2px;
  transition: all 0.1s;
  position: absolute;
  z-index: 1;
`
const ListItem = styled.li`
  padding-left: 0;
  .Icon32 {
    path {
      fill: ${Color.white};
    }
  }
  &button,
  [type='button'] {
    display: flex;
    align-items: center;
    width: 100%;
    color: ${Color.white};
    font-family: ${Font.ui12.family};
    font-style: ${Font.ui12.style};
    font-weight: 300;
    font-size: ${Font.ui12.size};
    line-height: 32px;
    letter-spacing: ${Font.ui12.letterSpacing};

    &:focus {
      outline: none;
    }
  }
  &:hover {
    background-color: ${Color.primaryAccent};
  }
  &:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px ${Color.white}, inset 0px 0px 0px 3px ${Color.primaryAccent};
  }
`

function Dropdown({ icon, titleName, items }) {
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
    <Wrapper>
      <Header
        tabIndex={0}
        // className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <HeaderTitle>
          {isIcon(icon)}
          <p>{title}</p>
          <HeaderArrow>
            <Icon8 icon={arrow} />
          </HeaderArrow>
        </HeaderTitle>
      </Header>
      {open && (
        <List>
          {items.map(item => (
            <ListItem key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <Icon32 icon={isItemInSelection(item) ? selectedIcon : ''} />
                <span>
                  {item.value}
                  {isItemInSelection(item) && handleuUpdateTitle(item.value)}
                </span>
              </button>
            </ListItem>
          ))}
        </List>
      )}
    </Wrapper>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)
