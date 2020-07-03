import React from 'react'
import styled from 'styled-components'
import { Spacing } from '../modules/designTokens'
import SectionTitle from './SectionTItle'

const TabStripStyled = styled.div`
  display: flex;
  padding: ${Spacing.base};
`

const TabStrip = props => {
  return (
    <TabStripStyled>
      <SectionTitle>Design</SectionTitle>
      <SectionTitle>Prototype</SectionTitle>
      <SectionTitle>Code</SectionTitle>
    </TabStripStyled>
  )
}

export default TabStrip
