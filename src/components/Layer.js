import React from 'react'
import Panel from './Panel'
import SingleRow from './SingleRow'
import SectionTitle from './SectionTItle'
import Dropdown from './Dropdown'
import ValueSimpleNew from './ValueSimpleNew'
import IconButton from './IconButton'
import arrayToObjectArray from '../modules/arrayToObjectArray'
import ICONS from './ICONS'
import styled from 'styled-components'

const LayerStyled = styled.div`
  margin: 0;
  .LayerBlendModeDropDown {
    grid-column-start: 1;
    grid-column-end: span 17;
  }
  .LayerBlendModeValue {
    grid-column-start: 19;
    grid-column-end: span 6;
  }
  .LayerBlendModeButton {
    grid-column-start: 25;
    grid-column-end: span 4;
  }
  .SecitonTitle {
    grid-column-start: 1;
    grid-column-end: span 10;
  }
`

const options = [
  'Pass through',
  'Normal',
  'Darken',
  'Multiply',
  'Color Burn',
  'Lighten',
  'Screen',
  'Color Dodge',
  'Overlay',
  'Soft Light',
  'Hard Light',
  'Difference',
  'Exclusion',
  'Hue',
  'Saturation',
  'Color',
  'Luminocity',
]

const DropDownItems = arrayToObjectArray(options)

const Layer = props => {
  return (
    <LayerStyled>
      <Panel>
        <SingleRow>
          <div className="SecitonTitle">
            <SectionTitle>Layer</SectionTitle>
          </div>
        </SingleRow>
        <SingleRow>
          <div className="LayerBlendModeDropDown">
            <Dropdown
              titleName={DropDownItems[0].value}
              items={DropDownItems}
              icon={ICONS.BLENDEMPTY}
            />
          </div>
          <div className="LayerBlendModeValue">
            <ValueSimpleNew value="100%" placeholder="empty" />
          </div>
          <div className="LayerBlendModeButton">
            <IconButton icon={ICONS.VISIBLE} cursor="pointer" />
          </div>
        </SingleRow>
      </Panel>
    </LayerStyled>
  )
}

export default Layer
