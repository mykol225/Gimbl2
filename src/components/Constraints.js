import React from 'react'
import Panel from './Panel'
import SingleRow from './SingleRow'
import DoubleRow from './DoubleRow'
import SectionTitle from './SectionTItle'
import Dropdown from './Dropdown'
import arrayToObjectArray from '../modules/arrayToObjectArray'
import ICONS from './ICONS'
import styled from 'styled-components'
import CheckBox from './CheckBox'
import Selector from './Selector'

const Title = styled.div`
  grid-column-start: 1;
  grid-column-end: span 11;
`
const Check = styled.div`
  grid-column-start: 1;
  grid-column-end: span 28;
`
const SelectorStyled = styled.div`
  grid-column-start: 2;
  grid-column-end: span 8;
  grid-row-end: span 2;
`
const LRDropDown = styled.div`
  grid-column-start: 11;
  grid-column-end: span 17;
`
const UDDropDown = styled.div`
  grid-column-start: 11;
  grid-row-start: 2;
  grid-column-end: span 17;
`

const LRoptions = ['Left', 'Right', 'Left & Right', 'Center', 'Scale']
const LRDropDownItems = arrayToObjectArray(LRoptions)

const TBoptions = ['Top', 'Bottom', 'Top & Bottom', 'Center', 'Scale']
const TBDropDownItems = arrayToObjectArray(TBoptions)

const Constraints = props => {
  return (
    <Panel>
      <SingleRow>
        <Title>
          <SectionTitle>Constraints</SectionTitle>
        </Title>
      </SingleRow>
      <DoubleRow>
        <SelectorStyled>
          <Selector />
        </SelectorStyled>
        <LRDropDown>
          <Dropdown
            titleName={LRDropDownItems[0].value}
            items={LRDropDownItems}
            icon={ICONS.ARROWLEFTRIGHT}
          />
        </LRDropDown>
        <UDDropDown>
          <Dropdown
            titleName={TBDropDownItems[0].value}
            items={TBDropDownItems}
            icon={ICONS.ARROWUPDOWN}
          />
        </UDDropDown>
      </DoubleRow>
      <SingleRow>
        <Check>
          <CheckBox>Fix position when scrolling</CheckBox>
        </Check>
      </SingleRow>
    </Panel>
  )
}

export default Constraints
