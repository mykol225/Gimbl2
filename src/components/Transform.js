import React from 'react'
import Panel from '../components/Panel'
import SingleRow from '../components/SingleRow'
import SimpleWIcon from '../components/SimpleWIcon'
import OptionButton from '../components/OptionButton'
import ICONS from '../components/ICONS'
import styled from 'styled-components'

const TransformStyle = styled.div`
  margin: 0;
  .SimpleWIcon:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: span 11;
  }
  .SimpleWIcon:nth-child(2) {
    grid-column-start: 13;
    grid-column-end: span 11;
  }
  .OptionButton:nth-child(3) {
    grid-column-start: 25;
    grid-column-end: span 4;
  }
`

const Transform = props => {
  return (
    <TransformStyle>
      <Panel>
        <SingleRow>
          <SimpleWIcon icon={ICONS.XCOOR} cursor="IconEwCursor" value="200" placeholder="empty" />
          <SimpleWIcon icon={ICONS.YCOOR} cursor="IconEwCursor" value="-485" placeholder="empty" />
        </SingleRow>
        <SingleRow>
          <SimpleWIcon icon={ICONS.WIDTH} cursor="IconEwCursor" value="32" placeholder="empty" />
          <SimpleWIcon icon={ICONS.HEIGHT} cursor="IconEwCursor" value="32" placeholder="empty" />
          <OptionButton icon={ICONS.LINKBROKEN} cursor="pointer" />
        </SingleRow>
        <SingleRow>
          <SimpleWIcon icon={ICONS.ANGLE} cursor="IconEwCursor" value="0°" placeholder="empty" />
          <SimpleWIcon
            icon={ICONS.CORNERRADIUS}
            cursor="IconEwCursor"
            value="0"
            placeholder="empty"
          />
          <OptionButton icon={ICONS.CORNERS} cursor="pointer" />
        </SingleRow>
      </Panel>
    </TransformStyle>
  )
}

export default Transform
