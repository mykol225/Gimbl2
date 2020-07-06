import React from 'react'
import styled from 'styled-components'
import { Spacing } from '../modules/designTokens'

const SingleRowStyle = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(28, ${Spacing.base});
  grid-template-rows: ${Spacing.medium};
  padding-left: ${Spacing.base};
  padding-right: ${Spacing.base};
`

const SingleRow = props => {
  return <SingleRowStyle>{props.children}</SingleRowStyle>
}

export default SingleRow
