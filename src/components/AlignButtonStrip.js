import React from 'react'
import styled from 'styled-components'
import { Spacing } from '../modules/designTokens'
import IconButton from './IconButton'
import ICONS from './ICONS'
import SingleRow from './SingleRow'

const AlignStripStyled = styled.div`
  margin: 0;
  .IconButton:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: span 4;
  }
  .IconButton:nth-child(2) {
    grid-column-start: 5;
    grid-column-end: span 4;
  }
`

const AlignButtonStrip = props => {
  return (
    <AlignStripStyled>
      <SingleRow>
        <IconButton icon={ICONS.ANGLE} />
        <IconButton icon={ICONS.ANGLE} />
        <IconButton icon={ICONS.ANGLE} />
        <IconButton icon={ICONS.ANGLE} />
        <IconButton icon={ICONS.ANGLE} />
        <IconButton icon={ICONS.ANGLE} />
      </SingleRow>
    </AlignStripStyled>
  )
}

export default AlignButtonStrip
