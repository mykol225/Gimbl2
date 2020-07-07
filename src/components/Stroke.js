import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'
import SingleRow from './SingleRow'
import SectionTitle from './SectionTItle'
import ColorWValue from './ColorWValue'
import IconButton from './IconButton'
import ICONS from './ICONS'
import SimpleWIcon from './SimpleWIcon'
import Dropdown from './Dropdown'
import arrayToObjectArray from '../modules/arrayToObjectArray'

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
const StrokeWeightDropdown = styled.div`
  grid-column-start: 1;
  grid-column-end: span 11;
`
const StrokeAlignment = styled.div`
  grid-column-start: 13;
  grid-column-end: span 12;
`
const Menu = styled.div`
  grid-column-start: 25;
  grid-column-end: span 4;
`

const options = ['Center', 'Inside', 'Outside']

const DropDownItems = arrayToObjectArray(options)

const Stroke = props => {
  return (
    <Panel>
      <SingleRow>
        <FillTitle>
          <SectionTitle>Stroke</SectionTitle>
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
            color="#000000"
            firstValue="000000"
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
      <SingleRow>
        <StrokeWeightDropdown>
          <SimpleWIcon icon={ICONS.STROKEWEIGHT} cursor="IconEwCursor" value="1" placeholder="" />
        </StrokeWeightDropdown>
        <StrokeAlignment>
          <Dropdown titleName={DropDownItems[0].value} items={DropDownItems} icon="" />
        </StrokeAlignment>
        <Menu>
          <IconButton icon={ICONS.MEATBALLS} />
        </Menu>
      </SingleRow>
    </Panel>
  )
}

export default Stroke
