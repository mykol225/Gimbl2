import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import SingleRow from './SingleRow'
import SectionTitle from './SectionTItle'
import ColorWValue from './ColorWValue'
import IconButton from './IconButton'
import ICONS from './ICONS'

const FillTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: span 10;
`
const StyleButton = styled.div`
  grid-column-start: 21;
  grid-column-end: span 4;
`
const AddFill = styled.div`
  grid-column-start: 25;
  grid-column-end: span 4;
`
const Colors = styled.div`
  grid-column-start: 1;
  grid-column-end: span 18;
`
const Visibility = styled.div`
  grid-column-start: 21;
  grid-column-end: span 4;
`
const RemoveFill = styled.div`
  grid-column-start: 25;
  grid-column-end: span 4;
`

const Fill = props => {
  return (
    <Panel>
      <SingleRow>
        <FillTitle>
          <SectionTitle>Fill</SectionTitle>
        </FillTitle>
        <StyleButton>
          <IconButton icon={ICONS.STYLES} />
        </StyleButton>
        <AddFill>
          <IconButton icon={ICONS.PLUS} />
        </AddFill>
      </SingleRow>
      <SingleRow>
        <Colors>
          <ColorWValue
            type="solid"
            color="rgba(255, 200, 35, 0.6)"
            firstValue="#FACB25"
            firstPlaceholder=""
            secondValue="100%"
            secondPlaceholder=""
          />
        </Colors>
        <Visibility>
          <IconButton icon={ICONS.VISIBLE} />
        </Visibility>
        <RemoveFill>
          <IconButton icon={ICONS.MINUS} />
        </RemoveFill>
      </SingleRow>
    </Panel>
  )
}

export default Fill
