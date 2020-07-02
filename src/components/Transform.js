import React from 'react'
import Panel from '../components/Panel'
import SingleRow from '../components/SingleRow'
import SimpleWIcon from '../components/SimpleWIcon'
import OptionButton from '../components/OptionButton'
import ICONS from '../components/ICONS'

const Transform = props => {
  return (
    <div className="Transform">
      <Panel>
        <SingleRow>
          <SimpleWIcon icon={ICONS.WIDTH} cursor="IconEwCursor" value="32" placeholder="empty" />
          <SimpleWIcon icon={ICONS.HEIGHT} cursor="IconEwCursor" value="32" placeholder="empty" />
          <OptionButton icon={ICONS.LINKBROKEN} cursor="pointer" />
        </SingleRow>
        <SingleRow>
          <SimpleWIcon icon={ICONS.WIDTH} cursor="IconEwCursor" value="32" placeholder="empty" />
          <SimpleWIcon icon={ICONS.HEIGHT} cursor="IconEwCursor" value="32" placeholder="empty" />
          <OptionButton icon={ICONS.LINKBROKEN} cursor="pointer" />
        </SingleRow>
        <SingleRow>
          <SimpleWIcon icon={ICONS.WIDTH} cursor="IconEwCursor" value="32" placeholder="empty" />
          <SimpleWIcon icon={ICONS.HEIGHT} cursor="IconEwCursor" value="32" placeholder="empty" />
          <OptionButton icon={ICONS.LINKBROKEN} cursor="pointer" />
        </SingleRow>
      </Panel>
    </div>
  )
}

export default Transform
