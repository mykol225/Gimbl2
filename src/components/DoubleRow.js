import React from 'react'
import styled from 'styled-components'
import { Spacing } from '../modules/designTokens'

const DoubleRowStyle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(28, ${Spacing.base});
  grid-template-rows: repeat(2, ${Spacing.medium});
  padding: ${Spacing.base};
`

const DoubleRow = props => {
  return <DoubleRowStyle>{props.children}</DoubleRowStyle>
}

export default DoubleRow
