import React from 'react'
import 'typeface-inter'
import '../components/styles.scss'
import Hyperlink from '../components/Hyperlink'
import SideBar from '../components/SideBar'
import styled from 'styled-components'
import { Color, Spacing } from '../modules/designTokens'

const ToolBarStyled = styled.div`
  background-color: ${Color.toolbar};
  width: 100%;
  padding: ${Spacing.base};
  position: fixed;
  top: 0;
`

const IndexPage = () => (
  <div>
    <ToolBarStyled>
      <Hyperlink link="../library.js">Library Page</Hyperlink>
    </ToolBarStyled>
    <SideBar />
  </div>
)

export default IndexPage
