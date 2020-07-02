import React from 'react'
import styled from 'styled-components'
import { Color } from '../modules/designTokens'

const PanelStyle = styled.div`
  width: 240px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: white;
  border-bottom: solid 1px ${Color.black1};
`

const Panel = props => {
  return <PanelStyle>{props.children}</PanelStyle>
}

export default Panel
