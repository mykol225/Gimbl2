import React from 'react'
import styled from 'styled-components'
import { Color, Spacing } from '../modules/designTokens'

const PanelStyle = styled.div`
  width: 240px;
  padding-top: ${Spacing.base};
  padding-bottom: ${Spacing.base};
  background-color: white;
  border-bottom: solid 1px ${Color.black1};
`

const Panel = props => {
  return <PanelStyle>{props.children}</PanelStyle>
}

export default Panel
