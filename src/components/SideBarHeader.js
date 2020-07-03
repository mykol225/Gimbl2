import React from 'react'
import Panel from './Panel'
import TabStrip from './TabStrip'
import SingleRow from './SingleRow'
import ICONS from './ICONS'
import IconButton from './IconButton'
import styled from 'styled-components'

const SideBarHeaderStyled = styled.div`
  margin: 0;
  .IconButton:nth-child(1) {
    grid-column-start: 1;
  }
  .IconButton:nth-child(2) {
    grid-column-start: 5;
  }
  .IconButton:nth-child(3) {
    grid-column-start: 9;
  }
  .IconButton:nth-child(4) {
    grid-column-start: 13;
  }
  .IconButton:nth-child(5) {
    grid-column-start: 17;
  }
  .IconButton:nth-child(6) {
    grid-column-start: 21;
  }
  .IconButton:nth-child(7) {
    grid-column-start: 25;
  }
`

const SideBarHeader = props => {
  return (
    <SideBarHeaderStyled>
      <Panel>
        <TabStrip />
        <SingleRow>
          <IconButton icon={ICONS.LAYOUTALIGNLEFT} />
          <IconButton icon={ICONS.LAYOUTALIGNHORIZONTALCENTER} />
          <IconButton icon={ICONS.LAYOUTALIGNRIGHT} />
          <IconButton icon={ICONS.LAYOUTALIGNTOP} />
          <IconButton icon={ICONS.LAYOUTALIGNVERTICALCENTER} />
          <IconButton icon={ICONS.LAYOUTALIGNBOTTOM} />
          <IconButton icon={ICONS.DISTRIBUTEHORIZONTALSPACING} />
        </SingleRow>
      </Panel>
    </SideBarHeaderStyled>
  )
}

export default SideBarHeader
