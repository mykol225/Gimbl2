import React from 'react'
import Transform from '../components/Transform'
import styled from 'styled-components'
import { Spacing } from '../modules/designTokens'
import SideBarHeader from './SideBarHeader'
import Layer from './Layer'
import Fill from './Fill'
import Stroke from './Stroke'

const SideBarStyle = styled.div`
  margin: ${Spacing.xSmall};
`

const SideBar = props => {
  return (
    <SideBarStyle>
      <SideBarHeader />
      <Transform />
      <Layer />
      <Fill />
      <Stroke />
    </SideBarStyle>
  )
}

export default SideBar
