import React from 'react'
import Dropdown from './Dropdown'
import ICONS from './ICONS'
import ValueSimple from './ValueSimple'

const DropDownItems = [
  {
    id: 1,
    value: 'Pass through',
  },
  {
    id: 2,
    value: 'Normal',
  },
  {
    id: 3,
    value: 'Darken',
  },
  {
    id: 4,
    value: 'Multiply',
  },
  {
    id: 5,
    value: 'Lighten',
  },
]

const LayerBlendMode = props => {
  return (
    <div>
      <div className="LayerBlendModeDropDown">
        <Dropdown
          titleName={DropDownItems[0].value}
          items={DropDownItems}
          icon={ICONS.BLENDEMPTY}
        />
      </div>
      <div className="LayerBlendModeValue">
        <ValueSimple />
      </div>
    </div>
  )
}

export default LayerBlendMode
