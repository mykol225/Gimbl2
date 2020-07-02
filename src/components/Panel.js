import React from 'react'
import styled from 'styled-components'

const PanelStyle = styled.button`
  width: 240px;
  padding-top: $base-8;
  padding-bottom: $base-8;
  background-color: white;
  border-bottom: solid 1px $black-1;
`

const Panel = props => {
  return (
    <div>
      <PanelStyle> {props.children}</PanelStyle>
    </div>
  )
}

export default Panel
