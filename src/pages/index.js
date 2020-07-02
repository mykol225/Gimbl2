import React from 'react'
import 'typeface-inter'
import '../components/styles.scss'
import Hyperlink from '../components/Hyperlink'
import SideBar from '../components/SideBar'

const IndexPage = () => (
  <div>
    <Hyperlink link="../library.js">Library Page</Hyperlink>
    <SideBar />
  </div>
)

export default IndexPage
