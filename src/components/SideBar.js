import React from 'react'
import Transform from '../components/Transform'
import styled from 'styled-components'
import { Spacing } from '../modules/designTokens'
import SideBarHeader from './SideBarHeader'
import Layer from './Layer'
import Fill from './Fill'
import Stroke from './Stroke'
import Constraints from './Constraints'

const SideBarStyle = styled.div`
  float: right;
  margin-top: ${Spacing.large};
`

const SideBar = props => {
  return (
    <SideBarStyle>
      <SideBarHeader />
      <Transform />
      <Constraints />
      <Layer />
      <Fill />
      <Stroke />
    </SideBarStyle>
  )
}

export default SideBar
