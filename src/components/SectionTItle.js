import React from 'react'
import styled from 'styled-components'
import { Color, Font, Spacing } from '../modules/designTokens'

const SectionTitleStyled = styled.p`
  padding-left: ${Spacing.base};
  padding-right: ${Spacing.base};
  font-family: ${Font.family};
  font-size: ${Font.ui11.size};
  line-height: ${Font.ui11.lineHeight};
  letter-spacing: ${Font.ui11.letterSpacing};
  font-weight: ${Font.ui11.weight.bold};
  color: ${Color.fgHighPriorityf};
`

const SectionTitle = props => {
  return <SectionTitleStyled>{props.children}</SectionTitleStyled>
}

export default SectionTitle
