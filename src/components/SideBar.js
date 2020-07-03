import React from 'react'
import Transform from '../components/Transform'
import styled from 'styled-components'
import { Spacing } from '../modules/designTokens'
import SideBarHeader from './SideBarHeader'

const SideBarStyle = styled.div`
  margin: ${Spacing.xSmall};
`

const SideBar = props => {
  return (
    <SideBarStyle>
      <SideBarHeader />
      <Transform />
    </SideBarStyle>
  )
}

export default SideBar
