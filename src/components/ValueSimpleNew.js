import React, { useState } from 'react'
import styled from 'styled-components'
import { Color, Font, Spacing } from '../modules/designTokens'

const StyledInput = styled.input`
  box-sizing: border-box;
  padding: ${Spacing.base} ${Spacing.tiny} ${Spacing.base} ${Spacing.base};
  width: 100%;
  font-size: ${Font.ui11.size};
  font-style: ${Font.ui11.style};
  font-weight: ${Font.ui11.weight.normal};
  line-height: ${Spacing.xSmall};
  letter-spacing: ${Font.ui11.letterSpacing};
  color: ${Color.fgHighPriority};
  background-color: transparent;
  border: 0;
  -webkit-box-shadow: 0;
  -moz-box-shadow: 0;
  box-shadow: none;
  &:hover {
    border-radius: 3px;
    box-shadow: inset 0px 0px 0px 1px ${Color.white}, inset 0px 0px 0px 2px ${Color.black1};
  }
  &:focus {
    outline: none;
    border-radius: 4px;
    box-shadow: inset 0px 0px 0px 1px ${Color.white}, inset 0px 0px 0px 3px ${Color.primaryAccent};
  }
`

const ValueSimpleNew = props => {
  const [value, setValue] = useState(props.value)

  function handleNameChange(event) {
    setValue(event.target.value)
  }
  return (
    <StyledInput
      type="text"
      placeholder={props.placeholder}
      value={value}
      onChange={handleNameChange}
    />
  )
}

export default ValueSimpleNew
